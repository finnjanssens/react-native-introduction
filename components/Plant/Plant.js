import React from "react";
import { Text, View, Image } from "react-native";

export const Plant = (props) => {
  return (
    <View
      style={{
        alignSelf: "center",
        width: "80%",
        padding: 10,
        margin: 20,
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 15,
      }}
    >
      <Image
        style={{ width: "80%", height: 300 }}
        source={{ uri: props.plant.image }}
        resizeMode={"contain"} // cover or contain its upto you view look
      />
      <Text style={{ fontSize: 30, fontWeight: "800" }}>
        {props.plant.name}
      </Text>
      <Text style={{ fontStyle: "italic" }}>
        {props.plant.water} - {props.plant.sun}
      </Text>
    </View>
  );
};
