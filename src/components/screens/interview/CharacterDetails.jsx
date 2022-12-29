import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const CharacterDetails = ({ route, navigation }) => {
  const { id, name, status, image } = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={{ height: 300, width: 300, marginBottom: 12 }}
        source={{
          uri: image,
        }}
      ></Image>
      <Text style={{ textAlign: "left", paddingBottom: 6 }}>ID: {id}</Text>
      <Text style={{ textAlign: "left", paddingBottom: 6 }}>name: {name}</Text>
      <Text style={{ textAlign: "left", paddingBottom: 6 }}>
        status: {status}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container_green: {
    backgroundColor: "green",
  },
});
