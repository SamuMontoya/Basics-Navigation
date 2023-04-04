import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import LoginForm from "../screens/LoginForm";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LoginForm" component={LoginForm} />
    </Stack.Navigator>
  );
};

export default Navigation;
