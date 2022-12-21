import React from "react";
import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Listagem" component={Dashboard} />
      <Tab.Screen name="Cadastrar" component={Register} />
    </Tab.Navigator>
  );
}
