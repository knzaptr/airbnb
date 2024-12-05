import { SafeAreaView } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ButtonCustom } from "../../assets/components/index";
const Profile = () => {
  const { logout } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <ButtonCustom title="Se deconnecter" onPress={logout} />
    </SafeAreaView>
  );
};

export default Profile;
