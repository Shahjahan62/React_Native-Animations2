import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PanPonder from "./src/PanPonder";
import SwipeImages from "./src/SwipeImages";
import SpringAnimate from "./src/SpringAnimate";
import EventAnimate from "./src/EventAnimate";
import DecayAnimate from "./src/DecayAnimate";
import AddAnimate from "./src/AddAnimted";
import DivideAnimate from "./src/DivideAnimate";
import MultiplyAnimate from "./src/MultiplyAnimate";
import ModuloAnimate from "./src/ModuloAnimate";
import ParallelAnimate from "./src/Combining Animations/ParallelAnimate";
export default function App() {
  return (
    // <PanPonder />
    // <SwipeImages />
    // <SpringAnimate />
    // <EventAnimate />
    // <DecayAnimate />
    // <AddAnimate />
    // <DivideAnimate />
    // <MultiplyAnimate />
    // <ModuloAnimate />
    <ParallelAnimate />
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
