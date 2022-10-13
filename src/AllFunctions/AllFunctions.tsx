import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AddAnimate from "../AddAnimted";
import DecayAnimate from "../DecayAnimate";
import DivideAnimate from "../DivideAnimate";
import ModuloAnimate from "../ModuloAnimate";
const AllFunctions = () => {
  return (
    <ScrollView>
      <View
        style={{
          alignItems: "center",
          height: 450,
          backgroundColor: "red",
          paddingTop: 30,

          //   flex: 1,
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 30 }}>
          Add function Animation{" "}
        </Text>
        <AddAnimate />
      </View>
      <View
        style={{
          alignItems: "center",
          height: 450,
          backgroundColor: "lime",
          paddingTop: 30,

          //   flex: 1,
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 30 }}>
          Division function Animation{" "}
        </Text>
        <DivideAnimate />
      </View>
      <View
        style={{
          alignItems: "center",
          height: 450,
          backgroundColor: "#50C878",
          paddingTop: 30,

          //   flex: 1,
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 30 }}>
          Modulo function Animation{" "}
        </Text>
        <ModuloAnimate />
      </View>
    </ScrollView>
  );
};

export default AllFunctions;

const styles = StyleSheet.create({});
