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

const AnimatedButton: any = Animated.createAnimatedComponent(View);
const ButtonComp = () => {
  const animation = new Animated.Value(0);

  const scaleAnimation = new Animated.Value(1);

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
        duration: 2000,
        useNativeDriver: false,
      })
      // scaleAnimation.setValue(0)
    ).start();
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
    outputRange: ["0deg", "360deg"],
  });
  const interY = scaleAnimation.interpolate({
    inputRange: [0, 1, 1.1],
    outputRange: ["0deg", "360deg", "180deg"],
  });

  const rotateName = {
    transform: [{ rotateX: interX }, { rotateY: interY }],
  };

  useEffect(() => {
    startAnimation();
    startAnimation2();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AnimatedButton
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
      </AnimatedButton>
    </View>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({});
