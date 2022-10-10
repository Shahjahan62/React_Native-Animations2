import { View, Text, Animated, PanResponder } from "react-native";
import React, { Component } from "react";

const DecayAnimate = () => {
  const animated: any = new Animated.ValueXY(0);

  function ComponentWillMount() {
    var panRasponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: animated.x,
          dy: animated.y,
        },
      ]),
      onPanResponderRelease: (e, { vx, vy }) => {
        Animated.decay(animated, {
          velocity: { x: vx, y: vy },
          deceleration: 0997,
          useNativeDriver: false,
        }).start();
      },
    });
  }

  const animatedStyle = {
    transform: animated.getTranslateTransform(),
  };

  return (
    <View>
      <Animated.View
        style={[
          { width: 60, height: 60, backgroundColor: "teal" },
          animatedStyle,
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

export default DecayAnimate;
