import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React from "react";

const WidthHeight = () => {
  const animation = new Animated.Value(1);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

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
              width: "20%",
              height: "20%",
              backgroundColor: "black",
            },
            animatedStyle,
          ]}
        />
      </TouchableOpacity>
      <Text>hello</Text>
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
