import {
  Text,
  Button,
  SafeAreaView,
  View,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import {
  Logo,
  TextInputCustom,
  ButtonCustom,
} from "../../assets/components/index";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState, useContext } from "react";
import axios from "axios";
import styles from "../../assets/styles/styles";
import { AuthContext } from "../../context/AuthContext";
import Entypo from "@expo/vector-icons/Entypo";

const SignUpScreen = () => {
  const router = useRouter();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [description, setDescription] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (password !== confirmPassword) {
        return setErrorMessage("Les mots de passes sont différents");
      }
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
        {
          email: email,
          username: username,
          description: description,
          password: password,
          confirmPassword: confirmPassword,
        }
      );
      setIsLoading(true);
      setErrorMessage(null);
      login(response.data.id, response.data.token);
    } catch (error) {
      console.log("error : ", error.response.data.error);
      if (error.response.data.error === "Missing parameter(s)") {
        setErrorMessage("Veuillez remplir tous les champs.");
      } else if (
        error.response.data.error === "This email already has an account."
      ) {
        setErrorMessage("Cette adresse mail est déjà utilisée.");
      } else {
        setErrorMessage("Une erreur est survenue.");
      }
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.contentContainerStyle]}
      >
        <Logo />
        <Text style={styles.signin}>Sign in</Text>

        {/* Input mail et mot de passe */}
        <TextInputCustom
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInputCustom
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInputCustom
          style={styles.description}
          textAlignVertical="top"
          multiline={true}
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <View>
          <TextInputCustom
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          {showPassword ? (
            <Entypo
              style={styles.showHidePassword}
              name="eye"
              size={24}
              color="black"
              onPress={() => setShowPassword(false)}
            />
          ) : (
            <Entypo
              style={styles.showHidePassword}
              name="eye-with-line"
              size={24}
              color="black"
              onPress={() => setShowPassword(true)}
            />
          )}
        </View>
        <View>
          <TextInputCustom
            style={styles.passwordInput}
            placeholder="Confirm your password"
            secureTextEntry={showConfirmPassword}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />

          {showConfirmPassword ? (
            <Entypo
              style={styles.showHidePassword}
              name="eye"
              size={24}
              color="black"
              onPress={() => setShowConfirmPassword(false)}
            />
          ) : (
            <Entypo
              style={styles.showHidePassword}
              name="eye-with-line"
              size={24}
              color="black"
              onPress={() => setShowConfirmPassword(true)}
            />
          )}
        </View>

        {errorMessage && <Text>{errorMessage}</Text>}
        {/* Bouton connexion */}
        {isLoading ? (
          <>
            <ActivityIndicator />
            <ButtonCustom
              title="Sign In"
              onPress={handleSubmit}
              disabled={true}
              addStyleButton={styles.btnDisabled}
              addStyleText={styles.btnDisabledText}
            />
          </>
        ) : (
          <ButtonCustom title="Sign In" onPress={handleSubmit} />
        )}
        <Button
          title="Already have an account ? Sign in !"
          onPress={() => router.push("/")}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
