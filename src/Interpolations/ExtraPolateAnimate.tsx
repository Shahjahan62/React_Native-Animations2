import { View, Text, Animated, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
const ExtraPolateAnimate = () => {
  const animation = new Animated.Value(1);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 3,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };

  const scaleInterpolation = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [1, 2],
    // extrapolate: "clamp",
    // extrapolateLeft: "clamp",
    extrapolateRight: "clamp",

    // * The extrapolate key of an interpolate call defines how the interpolation should operate. Additionally you can define extrapolateLeft and extrapolateRight if you need either side of the interpolation to operate differently.
  });

  const animationStyle = {
    transform: [{ scale: scaleInterpolation }],
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={startAnimation}>
        <Animated.View
          style={[
            // { width: 70, height: 70, backgroundColor: "teal" },
            animationStyle,
          ]}
        >
          <FontAwesome name="heartbeat" size={100} color="red" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default ExtraPolateAnimate;
