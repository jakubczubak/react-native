import { useQuery } from "@tanstack/react-query";
import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

async function fetchCharacters() {
  const respone = await fetch("https://rickandmortyapi.com/api/character/");
  return await respone.json();
}

export const CharacterList = ({ navigation }) => {
  const { data, isLoading, isError } = useQuery(
    ["characters"],
    fetchCharacters,
    {
      placeholderData: [],
    }
  );

  const windowWidth = Dimensions.get("window").width;

  return (
    <View>
      <FlatList
        horizontal={false}
        columnWrapperStyle={{ paddingBottom: 12 }}
        numColumns={3}
        data={data.results}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text style={{ textAlign: "center" }}>Rick and Morty </Text>
        }
        ListHeaderComponentStyle={{ padding: 12 }}
        renderItem={({ item, index }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Character Details", {
                    id: item.id,
                    name: item.name,
                    status: item.status,
                    image: item.image,
                  });
                }}
              >
                <Image
                  style={{ height: 200, width: windowWidth / 3 }}
                  source={{
                    uri: item.image,
                  }}
                ></Image>
                <Text
                  style={{
                    textAlign: "center",
                    width: windowWidth / 3,
                    padding: 8,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};
