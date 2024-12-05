import { Text, View, Button, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import {
  Logo,
  TextInputCustom,
  ButtonCustom,
} from "../../assets/components/index";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState, useContext } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../assets/styles/styles";
import { AuthContext } from "../../context/AuthContext";
import Entypo from "@expo/vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const router = useRouter();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("kip@mail.com");
  const [password, setPassword] = useState("pass");
  const [errorMessage, setErrorMessage] = useState(null);

  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // const fetchStorage = async () => {
  //   const id = await AsyncStorage.getItem("id");
  //   const token = await AsyncStorage.getItem("token");
  //   return { id, token };
  // };

  // const { id, token } = fetchStorage();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        {
          email: email,
          password: password,
        }
      );
      setIsLoading(true);
      setErrorMessage(null);
      await AsyncStorage.setItem("id", JSON.stringify(response.data.id));
      await AsyncStorage.setItem("token", JSON.stringify(response.data.token));

      login(response.data.id, response.data.token);
    } catch (error) {
      if (error.response.data.error === "Missing parameter(s)") {
        setErrorMessage("Veuillez remplir tous les champs.");
      } else if (
        error.response.data.error === "This account doesn't exist !" ||
        error.response.data.error === "Unauthorized"
      ) {
        setErrorMessage("Adresse mail ou mot de passe incorrect.");
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
          title="No account ? Register !"
          onPress={() => router.push("/signUpScreen")}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
