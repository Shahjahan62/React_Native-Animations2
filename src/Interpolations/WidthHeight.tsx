import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React from "react";

const WidthHeight = () => {
  const animation = new Animated.Value(0);

  const startAnimation = () => {};

  const widthStyle = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["20%", "50%"],
  });

  const heightStyle = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["20%", "30%"],
  });

  const animatedStyle = {
    width: widthStyle,
    height: heightStyle,
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startAnimation}>
        <Animated.View
          style={[
            {
              width: "100%",
              height: "100%",
              backgroundColor: "teal",
            },
            animatedStyle,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default WidthHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
