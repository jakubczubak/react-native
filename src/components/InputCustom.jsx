import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export const InputCustom = () => {
  const [value, setValue] = useState("");

  function handleText(text) {
    setValue(text);
  }

  return (
    <View>
      <Text>Value: {value}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleText}
        secureTextEntry // nie widac co użytkownik wpisuje coś jak password
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#eee",
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: 100,
    borderRadius: 4,
  },
});
