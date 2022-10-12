import { View, Text, Animated, TouchableOpacity } from "react-native";
import React from "react";

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
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const animationStyle = {
    transform: [{ scale: scaleInterpolation }],
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={startAnimation}>
        <Animated.View
          style={[
            { width: 70, height: 70, backgroundColor: "teal" },
            animationStyle,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ExtraPolateAnimate;
