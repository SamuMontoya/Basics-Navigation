import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import LoginForm from "../screens/LoginForm";

const Drawer = createDrawerNavigator();

export default function Drawercito() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="LoginForm" component={LoginForm} />
    </Drawer.Navigator>
  );
}
