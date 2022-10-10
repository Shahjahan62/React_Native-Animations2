import { View, Text, Animated, TouchableOpacity } from "react-native";
import React from "react";

const ParallelAnimate = () => {
  const colorAnimation = new Animated.Value(0);
  const scaleAnimation = new Animated.Value(1);

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(colorAnimation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start(() => {
      alert("Animation completed");
    });
  };

  const bgInterpolate = colorAnimation.interpolate({
    inputRange: [0, 1],
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

export default ParallelAnimate;
