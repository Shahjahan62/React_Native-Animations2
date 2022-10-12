import {
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const AnimatedButton: any = Animated.createAnimatedComponent(View);
const ButtonComp = () => {
  const animation = new Animated.Value(0);

  const scaleAnimation = new Animated.Value(1);
  const sprng = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 8,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    });
  };

  const startAnimation2 = () => {
    Animated.loop(
      Animated.timing(scaleAnimation, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: false,
      })
      // scaleAnimation.setValue(0)
    ).start();
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
  const interpolated = sprng.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedStyle3 = {
    transform: [{ rotate: interpolated }],
  };

  const btnColor = animation.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6, 7],
    outputRange: [
      "rgb(255,66,71)",
      "rgb(255,200,0)",
      "rgb(255,200,200)",
      "rgb(10,200,0)",
      "rgb(100,10,0)",
      "rgb(100,50,100)",
      "rgb(300,20,0)",
      "rgb(150,300,200)",
    ],
  });

  const interX = scaleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "20deg"],
  });
  const interY = scaleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "60deg"],
  });

  const rotateName = {
    transform: [{ rotateX: interX }, { rotateY: interY }],
  };

  useEffect(() => {
    startAnimation();
    // startAnimation2();
    handleLoop();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <AnimatedButton
        onPress={startAnimation}
        style={{
          flex: 1,
          backgroundColor: btnColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View style={[{ width: "100%", height: 200 }, rotateName]}>
          <Text style={{ fontSize: 80, fontWeight: "bold" }}>Jami</Text>
          <MaterialCommunityIcons name="sword" size={50} color="black" />
        </Animated.View>
      </AnimatedButton> */}
      <View
        style={{
          width: 200,
          height: 200,
          borderWidth: 2,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatedButton>
          <Animated.View style={[animatedStyle3]}>
            <FontAwesome5 name="long-arrow-alt-down" size={120} color="black" />
          </Animated.View>
        </AnimatedButton>
      </View>
      <TouchableOpacity onPress={handleLoop}>
        <Animated.View style={[animatedStyle3]}></Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({});
