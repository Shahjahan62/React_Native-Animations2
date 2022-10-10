import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PanPonder from "./src/PanPonder";
import SwipeImages from "./src/SwipeImages";
import SpringAnimate from "./src/SpringAnimate";
import EventAnimate from "./src/EventAnimate";
import DecayAnimate from "./src/DecayAnimate";
import AddAnimate from "./src/AddAnimted";
import DivideAnimate from "./src/DivideAnimate";
export default function App() {
  return (
    // <PanPonder />
    // <SwipeImages />
    // <SpringAnimate />
    // <EventAnimate />
    // <DecayAnimate />
    // <AddAnimate />
    <DivideAnimate />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
