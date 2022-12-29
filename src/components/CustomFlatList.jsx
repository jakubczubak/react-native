import React from "react";
import { FlatList, View, StyleSheet, Text, Image } from "react-native";
import { useState, useEffect } from "react";

function getPhotos() {
  return fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
    (respone) => respone.json()
  );
}

export const CustomFlatList = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    getPhotos().then((photos) => setData(photos));
  }, []);
  return (
    <FlatList
      horizontal
      data={data}
      keyEctractor={(items) => items.id}
      ListHeaderComponent={
        <View>
          <Text>Nagłowek</Text>
        </View>
      }
      ListFooterComponent={
        <View>
          <Text>Stopka</Text>
        </View>
      }
      renderItem={({ item, index }) => {
        return (
          <View
            style={[
              styles.container,
              index % 2 === 0 ? {} : styles.container_green,
            ]}
          >
            <Image
              style={
                index % 2 == 0
                  ? { width: 200, height: 200 }
                  : { width: 200, height: 200 }
              }
              source={{
                uri: item.url,
              }}
            ></Image>
            <Text style={{ width: 200, textAlign: "center" }}>
              {item.title}
            </Text>
          </View>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container_green: {
    backgroundColor: "green",
  },
});
