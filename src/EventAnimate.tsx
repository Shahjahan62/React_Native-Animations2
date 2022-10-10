import { View, Text, Animated, ScrollView } from "react-native";
import React from "react";

const EventAnimate = () => {
  const animted = new Animated.Value(0);

  const bgInterpolate = animted.interpolate({
    inputRange: [0, 3000],
    outputRange: ["rgb(255,99,71)", "rgb(50,0,50)"],
  });

  const bgColor = {
    backgroundColor: bgInterpolate,
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: animted,
              },
            },
          },
        ])}
      >
        <Animated.View style={[bgColor, { height: 3000 }]} />
      </ScrollView>
    </View>
  );
};

export default EventAnimate;
