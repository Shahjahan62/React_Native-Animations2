import { View, Text, Animated, TouchableOpacity } from "react-native";
import React from "react";

const ModuloAnimate = () => {
  const animated = new Animated.Value(0);

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(animated, {
        toValue: 12,
        duration: 3500,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const Rvalue = 2;

  const newAnimated = Animated.modulo(animated, Rvalue);

  const interpolated = newAnimated.interpolate({
    inputRange: [0, 3],
    outputRange: ["0deg", "270deg"],
  });
  const animatedStyle = {
    transform: [{ rotate: interpolated }],
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={startAnimation}>
        <Animated.View
          style={[
            animatedStyle,
            { width: 50, height: 50, backgroundColor: "teal" },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ModuloAnimate;
