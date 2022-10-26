import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { plants } from "./assets/plants";
import { Plant } from "./components/Plant/Plant";

export default function App() {
  console.log("test");
  return (
    <ScrollView>
      {plants.map((plant, index) => {
        return <Plant key={index} plant={plant} />;
      })}
    </ScrollView>
  );
}
