import React from "react";
import { Text, View, Image } from "react-native";

export const Plant = (props) => {
  return (
    <View style={{ width: "100%" }}>
      <Image
        style={{ width: "80%", height: 300 }}
        source={{ uri: props.plant.image }}
        resizeMode={"cover"} // cover or contain its upto you view look
      />
      <Text>{props.plant.name}</Text>
      <Text>{props.plant.water}</Text>
      <Text>{props.plant.sun}</Text>
    </View>
  );
};
