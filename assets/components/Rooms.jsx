import { View, Image, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import Swiper from "react-native-swiper";

const Rooms = ({ userPic, lgtPic, price, title, rate, nbReview, id }) => {
  const stars = [];
  for (let i = 0; i <= Math.trunc(rate); i++) {
    stars.push(<FontAwesome key={i} name="star" size={24} color="black" />);
  }

  if (rate % 1 !== 0) {
    <FontAwesome
      key={stars.length}
      name="star-half-full"
      size={24}
      color="black"
    />;
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(<FontAwesome key={i} name="star-o" size={24} color="black" />);
  }

  return (
    <Link href={`/room?id=${id}`}>
      <View>
        <View>
          {/* image */}
          <Swiper showsButtons={true} style={{ height: 200 }}>
            {lgtPic && lgtPic.length > 0 ? (
              lgtPic.map((item) => (
                <Image
                  key={item.picture_id}
                  source={{ uri: item.url }}
                  style={styles.lgtImg}
                  resizeMode="cover"
                />
              ))
            ) : (
              <Text style={{ textAlign: "center" }}>No images available</Text>
            )}
          </Swiper>

          {/* prix */}
          <Text>{price}</Text>
        </View>
        {/* titre */}
        <Text>{title}</Text>
        {/* note */}
        <View>
          <View>{stars}</View>
          <Text>{nbReview} review</Text>
        </View>
        {/* user */}
        <Image source={userPic} />
      </View>
    </Link>
  );
};

export default Rooms;
const styles = StyleSheet.create({
  lgtImg: {
    height: 200,
    width: 400,
  },

  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
});
