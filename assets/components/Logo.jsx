import airbnbLogo from "../img/airbnbLogo.png";
import { Image, StyleSheet } from "react-native";
const Logo = () => {
  return <Image source={airbnbLogo} style={styles.logo} resizeMode="contain" />;
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 150,
  },
});
