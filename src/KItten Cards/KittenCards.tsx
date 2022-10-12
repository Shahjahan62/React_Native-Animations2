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
      <View style={styles.top}>
        {data.items
          .slice(0, 2)
          .reverse()
          .map(({ image, id, text }, index, items) => {
            return (
              <Animated.View style={[styles.card]} key={id}>
                <Animated.Image
                  source={image}
                  style={[styles.image]}
                  resizeMode="cover"
                />
                <View style={styles.lowerText}>
                  <Text>{text}</Text>
                </View>
              </Animated.View>
            );
          })}
      </View>
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
  card: {
    width: 300,
    height: 300,
    position: "absolute",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  image: {
    borderRadius: 2,
    flex: 3,
  },
  lowerText: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 5,
  },
});
