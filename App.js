import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { plants } from "./assets/plants";

export default function App() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
