import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="GO LOGIN" onPress={() => navigation.navigate("Login")} />
      <Button
        title="GO REGISTER"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}
