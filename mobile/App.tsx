import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Apartments from "./screens/Apartments";
import { NavigationContainer } from "@react-navigation/native";
import ApartmentsDetails from "./screens/ApartmentsDetails";
import Constants from "expo-constants";
const Stack = createNativeStackNavigator();
const hostUri = Constants?.expoConfig?.hostUri;
export const API_URL =
  hostUri !== undefined &&
  "http://" + hostUri.split(`:`).shift()!.concat(`:3001/apartment`);
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Apartments"
          component={Apartments}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ApartmentsDetails"
          component={ApartmentsDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
