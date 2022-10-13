import { View, Text, Animated, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
const AddAnimate = () => {
  const animated = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animated, {
      toValue: 300,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animated, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
  };
  const Rvalue = 2;

  const newAnimated = Animated.add(animated, Rvalue);

  const animatedStyle = {
    transform: [{ translateY: newAnimated }],
  };
  return (
    <View
      style={{
        // flex: 1,

        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={startAnimation}>
        <Animated.View
          style={[
            animatedStyle,
            // { width: 50, height: 50, backgroundColor: "teal" },
          ]}
        >
          <Entypo name="emoji-happy" size={60} color="yellow" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default AddAnimate;
