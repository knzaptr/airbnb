import { TextInput, StyleSheet } from "react-native";
const TextInputCustom = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  style,
  textAlignVertical,
  multiline,
}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      textAlignVertical={textAlignVertical}
      multiline={multiline}
    />
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#EB5A62",
    borderBottomWidth: 1,
    borderStyle: "solid",
    width: 250,
    height: 40,
  },
});
