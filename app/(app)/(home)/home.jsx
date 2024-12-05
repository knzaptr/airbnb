import { ScrollView, SafeAreaView, Text } from "react-native";
import styles from "../../../assets/styles/styles";
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={[styles.contentContainerStyle]}>
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
