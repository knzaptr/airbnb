import { useLocalSearchParams } from "expo-router";
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import styles from "../../../assets/styles/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { Rooms } from "../../../assets/components/index";
const Room = () => {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/${id}`
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
        <Rooms
          title={data.title}
          price={data.price}
          nbReview={data.reviews}
          rate={data.ratingValue}
          lgtPic={data.photos}
        />
      </View>
    </SafeAreaView>
  );
};

export default Room;
