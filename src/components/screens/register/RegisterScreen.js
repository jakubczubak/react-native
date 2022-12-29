import { View, Text, Button } from "react-native";

export default function RegisterScreen({ navigation }) {
  return (
    <View>
      <Text>Register Screen</Text>
      <Button title="GO HOME" onPress={() => navigation.navigate("Home")} />
      <Button title="GO LOGIN" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
