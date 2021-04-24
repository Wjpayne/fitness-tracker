import { NavigationContainer, StackActions } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LandingPage } from "./Components/LandingPage";
import { Profile } from './Components/Profile';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Home" component={LandingPage} options={{ title: 'Home' }}></Stack.Screen>
        <Stack.Screen name = "Profile" component = {Profile}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
