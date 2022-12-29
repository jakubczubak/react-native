import { View, Text, Button, StyleSheet } from "react-native";
import { ReactHookForm } from "../../ReactHookForm";

export default function LoginScreen({ navigation }) {
  const handleSuccess = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={asd.container}>
      <Text>Login Screen</Text>
      <View>
        <ReactHookForm onSuccess={handleSuccess} />
      </View>
      <Button
        title="GO REGISTER"
        onPress={() => navigation.navigate("Register")}
      />
      <Button
        title="GO AsyncStorage"
        onPress={() => navigation.navigate("Home AsyncStorage")}
      />
       <Button
        title="RICK AND MORTY"
        onPress={() => navigation.navigate("Characters")}
      />
    </View>
  );
}

const asd = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
