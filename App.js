import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";

import { plants } from "./assets/plants";
import { Plant } from "./components/Plant/Plant";

export default function App() {
  console.log("test");
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#83A0A0",
          paddingBottom: 50,
        }}
      >
        <Text
          style={{
            fontSize: 50,
            padding: 20,
            paddingTop: 50,
            backgroundColor: "#83A0A0",
            fontWeight: "800",
          }}
        >
          Rise of the planet of the plants
        </Text>
        {plants.map((plant, index) => {
          return <Plant key={index} plant={plant} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
