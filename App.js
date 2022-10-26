import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { plants } from "./assets/plants";
import { Plant } from "./components/Plant/Plant";

export default function App() {
  console.log("test");
  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#83A0A0",
          paddingBottom: 50,
        }}
      >
        <Text
          style={{
            fontSize: 80,
            padding: 20,
            paddingTop: 50,
            backgroundColor: "#83A0A0",
          }}
        >
          Plants
        </Text>
        {plants.map((plant, index) => {
          return <Plant key={index} plant={plant} />;
        })}
      </ScrollView>
    </View>
  );
}
