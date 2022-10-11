import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

const RotationAnimate = () => {
  const animation = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const xInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const yInterpolate = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "0deg", "180deg"],
  });

  const animatedStyle = {
    transform: [{ rotateX: xInterpolate }, { rotateY: yInterpolate }],
  };
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={startAnimation}>
        <Animated.View
          style={[
            {
              width: 150,
              height: 150,
              backgroundColor: "teal",
            },
            animatedStyle,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default RotationAnimate;
