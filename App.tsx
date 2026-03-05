import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/HomeScreen";
import Edit from "./src/screens/AddEditScreen";

const Stack = createNativeStackNavigator<ScreenTypes>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen" screenOptions={ { headerShown: false } }>
        <Stack.Screen name="MainScreen" component={Home} />
        <Stack.Screen name="EditScreen" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}