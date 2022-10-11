import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React from "react";

const BgColorInterpolations = () => {
  const animation = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const colorInterpolate = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["rgb(255,200,200)", "rgb(255,200,0)", "rgb(200,0,30)"],
  });

  const animateStyle = {
    backgroundColor: colorInterpolate,
  };

  const bgStyle = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: ["rgb(255,66,200)", "rgb(255,0,0)", "rgb(200,300 ,0)"],
    }),
  };

  return (
    <Animated.View style={[styles.container, bgStyle]}>
      <TouchableOpacity onPress={startAnimation}>
        <Animated.View
          style={[
            {
              width: 150,
              height: 150,
            },
            animateStyle,
          ]}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BgColorInterpolations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
