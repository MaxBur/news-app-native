import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { HomeScreen } from "./HomeScreen";
import { FullPostScreen } from "./FullPostScreen";
import { TestScreen } from "./TestScreen";
import { Header } from "../components/Header/Header";


const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Новости" }}
        />
        <Stack.Screen
          name="FullPost"
          component={FullPostScreen}
          options={{ title: "Статья" }}
        />
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{ title: "Тестовая страница" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
