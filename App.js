import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { CustomFlatList } from "./src/components/CustomFlatList";
import { InputCustom } from "./src/components/InputCustom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Todos } from "./src/components/Todos";
import { ReactHookForm } from "./src/components/ReactHookForm";
import { MainNavigator } from "./src/components/navigators";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {/* <View style={styles.container}> */}
        {/* <CustomFlatList /> */}
        {/* <InputCustom /> */}
        {/* <Todos /> */}
        {/* {<ReactHookForm />} */}
        {/* </View> */}
        <MainNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
