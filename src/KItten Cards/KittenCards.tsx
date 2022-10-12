import { StyleSheet, Text, View, Animated, Image } from "react-native";
import React from "react";

const KittenCards = () => {
  //   const animation = new Animated.Value(0);

  const data = {
    items: [
      {
        image: <Image source={require("../../assets/cat1.jpg")} />,
        id: 1,
        text: "sweet cat",
      },
      {
        image: <Image source={require("../../assets/cat2.jpg")} />,
        id: 2,
        text: "sweeter cat",
      },
      {
        image: <Image source={require("../../assets/cat3.jpg")} />,
        id: 3,
        text: "sweetest cat",
      },
      {
        image: <Image source={require("../../assets/cat4.jpg")} />,
        id: 4,
        text: "awsome cat",
      },
    ],
    animation: new Animated.ValueXY(),
    opacity: new Animated.Value(1),
    next: new Animated.Value(0.9),
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
    </View>
  );
};

export default KittenCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
