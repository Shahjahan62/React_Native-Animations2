import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AddAnimate from "../AddAnimted";
import DecayAnimate from "../DecayAnimate";
import DivideAnimate from "../DivideAnimate";
import ModuloAnimate from "../ModuloAnimate";
import MultiplyAnimate from "../MultiplyAnimate";
import SpringAnimate from "../SpringAnimate";
import SwipeImages from "../SwipeImages";
import EventAnimate from "../EventAnimate";
import BgColorInterpolations from "../Interpolations/BgColorInterpolations";
import ExtraPolateAnimate from "../Interpolations/ExtraPolateAnimate";
import NumAndInterpolates from "../Interpolations/NumAndInterpolates";
import RotationAnimate from "../Interpolations/RotationAnimate";
import WidthHeight from "../Interpolations/WidthHeight";

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
          height: 200,
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
      <View
        style={{
          alignItems: "center",
          height: 450,
          backgroundColor: "#728C00",
          paddingTop: 30,

          //   flex: 1,
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 30 }}>
          Multiply function Animation{" "}
        </Text>
        <MultiplyAnimate />
      </View>
      <View
        style={{
          alignItems: "center",
          height: 450,
          backgroundColor: "#4B5320",
          paddingTop: 30,

          //   flex: 1,
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 30 }}>
          Spring function Animation{" "}
        </Text>
        <SpringAnimate />
      </View>
      <View
        style={{
          alignItems: "center",
          height: 450,
          backgroundColor: "#4E9258",
          paddingTop: 30,

          //   flex: 1,
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 30 }}>
          Swipe images Animation{" "}
        </Text>
        <SwipeImages />
      </View>
      <View
        style={{
          alignItems: "center",
          height: 450,
          backgroundColor: "#FFFFC2",
          paddingTop: 30,

          //   flex: 1,
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 30 }}>
          Event throttle Animation{" "}
        </Text>
        <EventAnimate />
      </View>

      {/* Interpolations */}
      <Text style={{ fontWeight: "900", fontSize: 50 }}>Interpolations</Text>
      <View
        style={{
          alignItems: "center",
          height: 450,
          backgroundColor: "#C04000",
          paddingTop: 30,

          //   flex: 1,
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 30 }}>
          Background color interpolation Animation{" "}
        </Text>
        <BgColorInterpolations />
      </View>
      <View
        style={{
          alignItems: "center",
          height: 450,
          backgroundColor: "#FFCBA4",
          paddingTop: 30,

          //   flex: 1,
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 30 }}>
          Extrapolate interpolation Animation{" "}
        </Text>
        <ExtraPolateAnimate />
      </View>
      <View
        style={{
          alignItems: "center",
          height: 450,
          backgroundColor: "#FDD7E4",
          paddingTop: 30,

          //   flex: 1,
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 30 }}>
          Random number interpolation Animation{" "}
        </Text>
        <NumAndInterpolates />
      </View>
      <View
        style={{
          alignItems: "center",
          height: 450,
          backgroundColor: "#FFC0CB",
          paddingTop: 30,

          //   flex: 1,
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 30 }}>
          Rotation interpolation Animation{" "}
        </Text>
        <RotationAnimate />
      </View>
      <View
        style={{
          alignItems: "center",
          height: 450,
          backgroundColor: "#F660AB",
          paddingTop: 30,

          //   flex: 1,
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 30 }}>
          width height interpolation Animation{" "}
        </Text>
        <WidthHeight />
      </View>
    </ScrollView>
  );
};

export default AllFunctions;

const styles = StyleSheet.create({});
