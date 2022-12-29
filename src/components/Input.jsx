import { View, Text, StyleSheet, TextInput } from "react-native";
import { Controller } from "react-hook-form";

export const Input = ({ control, name, placeholder, ...rest }) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onBlur={onBlur}
          value={value}
          onChangeText={onChange}
          {...rest}
        />
        {error && <Text style={styles.error}>{error.message}</Text>}
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  input: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#eee",
    marginVertical: 4,
    borderRadius: 4,
    width: 200,
  },
  inputContainer: {
    width: "100%",
  },
  error: {
    color: "red",
    fontSize: 12,
    paddingHorizontal: 4,
  },
});
