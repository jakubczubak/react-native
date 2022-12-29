import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
import Login from "../screens/login";
import Register from "../screens/register";
import HomeScreenAsyncStorage from "../screens/home/HomeScreenAsyncStorage";
import { CharacterList } from "../screens/interview/CharacterList";
import { CharacterDetails } from "../screens/interview/CharacterDetails";

export const MainStack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Register" component={Register} />
      <MainStack.Screen
        name="Home AsyncStorage"
        component={HomeScreenAsyncStorage}
      />
      <MainStack.Screen name="Characters" component={CharacterList} />
      <MainStack.Screen name="Character Details" component={CharacterDetails} />
    </MainStack.Navigator>
  );
}
