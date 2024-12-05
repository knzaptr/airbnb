import { SafeAreaView, FlatList, ActivityIndicator, View } from "react-native";
import styles from "../../../assets/styles/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { Rooms } from "../../../assets/components/index";
const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.error);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView style={styles.container}>
      <View contentContainerStyle={styles.contentContainerStyle}>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item._id)}
          renderItem={({ item }) => (
            <Rooms
              id={item._id}
              title={item.title}
              price={item.price}
              nbReview={item.reviews}
              rate={item.ratingValue}
              lgtPic={item.photos}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
