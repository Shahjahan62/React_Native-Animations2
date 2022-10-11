import { View, Text, Animated, TouchableOpacity } from "react-native";
import React from "react";

const NumAndInterpolates = () => {
  const animate = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animate, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animate, {
        toValue: 2,
        duration: 300,
        useNativeDriver: false,
      });
    });
  };

  const animatedInterpolate = animate.interpolate({
    inputRange: [0, 1, 3],
    outputRange: [0, 300, 0],
  });

  const interpolatedIntepolate = animatedInterpolate.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0.5],
  });

  const translateXinterpolate = animatedInterpolate.interpolate({
    inputRange: [0, 30, 65, 100, 120, 160, 200, 220, 300],
    outputRange: [-30, -60, -20, -50, 0, -100, 0, 200, -100],
  });

  const animateStyle = {
    transform: [
      {
        translateY: animatedInterpolate,
      },
      {
        translateX: translateXinterpolate,
      },
    ],
    opacity: interpolatedIntepolate,
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={startAnimation}>
        <Animated.View
          style={[
            {
              width: 60,
              height: 60,

              backgroundColor: "teal",
            },
            animateStyle,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NumAndInterpolates;
