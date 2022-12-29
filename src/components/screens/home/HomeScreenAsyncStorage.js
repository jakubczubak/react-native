import { View, Text, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreenAsyncStorage({ navigation }) {
  const handleSave = async () => {
    try {
      await AsyncStorage.setItem("theme-mode", "dark");
    } catch (e) {
      Alert.alert("Error", "Something went wrong");
    }
  };

  const handleLoad = async () => {
    try {
      const response = await AsyncStorage.getItem("theme-mode");
      Alert.alert(response);
    } catch (e) {
      Alert.alert("Error", "Something went wrong");
    }
  };
  return (
    <View>
      <Button title="Save" onPress={handleSave}></Button>
      <Button title="Load" onPress={handleLoad}></Button>
    </View>
  );
}
