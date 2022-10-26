import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { plants } from "./assets/plants";
import { Plant } from "./components/Plant/Plant";

export default function App() {
  console.log("test");
  return (
    <View style={styles.container}>
      {plants.map((plant, index) => {
        return <Plant key={index} plant={plant} />;
      })}
    </View>
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
