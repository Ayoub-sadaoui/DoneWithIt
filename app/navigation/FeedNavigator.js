import React from "react";
import { View, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

function FeedNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen
        name="ListingsDetails"
        component={ListingDetailsScreen}
        options={{
          gestureEnabled: true, // Enable swipe-down gesture
          gestureResponseDistance: 500, // Adjust swipe sensitivity
        }}
      />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
