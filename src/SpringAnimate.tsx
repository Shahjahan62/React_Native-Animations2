import { View, Text, Animated, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const SpringAnimate = () => {
  const sprng1 = useRef(new Animated.Value(1)).current;

  const sprng = new Animated.Value(0);

  const handlePress = () => {
    Animated.spring(sprng1, {
      toValue: 2,
      tension: 160,
      friction: 2,
      useNativeDriver: false,
    }).start(() => {
      Animated.loop(
        Animated.timing(sprng1, {
          toValue: 2,
          duration: 2000,
          useNativeDriver: false,
        })
      ).start();
    });
  };

  const handleLoop = () => {
    Animated.loop(
      Animated.timing(sprng, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: false,
      })
    ).start();
  };

  const animatedStyle = {
    transform: [{ scale: sprng1 }],
  };

  const animatedStyle2 = {
    transform: [{ translateY: sprng }],
  };

  const interpolated = sprng.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedStyle3 = {
    transform: [{ rotate: interpolated }],
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={handlePress}>
        <Animated.View
          style={[
            {
              width: 60,
              height: 60,
              backgroundColor: "black",
            },
            animatedStyle,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoop}>
        <Animated.View
          style={[
            { width: "100%", height: 100, marginTop: 100 },
            animatedStyle3,
          ]}
        >
          <MaterialCommunityIcons
            name="star-four-points-outline"
            size={80}
            color="white"
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default SpringAnimate;
