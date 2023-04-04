import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import LoginForm from "../screens/LoginForm";

const TabParent = createBottomTabNavigator();

export default function Tab() {
  return (
    <TabParent.Navigator
      tabBarOptions={{
        activeTintColor: "gray",
        inactiveTintColor: "white",
        style: {
          backgroundColor: "lightgray",
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: "bold",
          paddingBottom: 10,
        },
      }}
    >
      <TabParent.Screen name="Home" component={Home} />
      <TabParent.Screen name="LoginForm" component={LoginForm} />
    </TabParent.Navigator>
  );
}
