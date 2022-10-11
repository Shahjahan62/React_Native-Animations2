import { View, Text, Animated, TouchableOpacity } from "react-native";
import React from "react";

const DelayAnimate = () => {
  const colorAnimation = new Animated.Value(0);
  const scaleAnimation = new Animated.Value(1);

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(colorAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 2,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.delay(1500),
    ]).start();
  };
  const bgInterpolate = colorAnimation.interpolate({
    inputRange: [0, 3],
    outputRange: ["rgb(255,66,71)", "rgb(255,200,0)"],
  });

  const boxStyle = {
    backgroundColor: bgInterpolate,
    transform: [{ scale: scaleAnimation }],
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={startAnimation}>
        <Animated.View style={[{ width: 60, height: 60 }, boxStyle]} />
      </TouchableOpacity>
    </View>
  );
};

export default DelayAnimate;
