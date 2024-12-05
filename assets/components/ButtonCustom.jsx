import { Text, Pressable, StyleSheet } from "react-native";

const ButtonCustom = ({
  title,
  onPress,
  addStyleButton,
  addStyleText,
  disabled,
}) => {
  return (
    <Pressable
      style={[styles.button, addStyleButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, addStyleText]}>{title}</Text>
    </Pressable>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    borderColor: "#EB5A62",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 50,
    width: "50%",
    height: 50,
    justifyContent: "center",
  },

  text: {
    color: "#EB5A62",
    fontSize: 20,
    textAlign: "center",
  },
});
