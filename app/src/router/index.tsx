import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "@src/screens/HomeScreen";

export type Router = {
  Home: undefined;
  Stack: { type: string };
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
}

const Stack = createNativeStackNavigator<Router>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={'Home'} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}