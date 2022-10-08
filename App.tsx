import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PanPonder from "./src/PanPonder";
import SwipeImages from "./src/SwipeImages";
export default function App() {
  return (
    // <PanPonder />
    <SwipeImages />
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
