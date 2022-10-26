import React from "react";
import { Text, View } from "react-native";

export const Plant = (props) => {
  return (
    <View>
      <Text>{props.plant.name}</Text>
    </View>
  );
};
