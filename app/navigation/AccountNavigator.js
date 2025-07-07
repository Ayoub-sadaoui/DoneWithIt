import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

function AccountNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="My Account" component={AccountScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="Listings" component={ListingsScreen} />
    </Stack.Navigator>
  );
}

export default AccountNavigator;
