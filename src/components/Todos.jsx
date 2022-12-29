import { useQuery } from "@tanstack/react-query";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  return await response.json();
}

export function Todos() {
  const { data, isLoading, isError } = useQuery(["users"], fetchUsers, {
    placeholderData: [],
  });

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text style={{ textAlign: "center" }}>Photos</Text>
        }
        isLoading={isLoading}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.container}>
              <Image
                style={{ width: 200, height: 200 }}
                source={{
                  uri: item.url,
                }}
              ></Image>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
    paddingTop: 100,
  },
});
