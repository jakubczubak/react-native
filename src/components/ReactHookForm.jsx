import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validationSchema";
import { Input } from "./Input";
import { yupResolver } from "@hookform/resolvers/yup";

export const ReactHookForm = ({ onSuccess }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    Alert.alert("Form submitted!", JSON.stringify(data));
    onSuccess();
  };

  return (
    <View>
      <Text>React Hook Form</Text>
      <Input control={control} name="email" placeholder="Address email" />
      <Input control={control} name="firstName" placeholder="First name" />
      <Input control={control} name="lastName" placeholder="Last name" />
      <Input
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <Input
        control={control}
        name="confirmPassword"
        placeholder="Confirm password"
        secureTextEntry={true}
      />

      <Button title="Submit form" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
