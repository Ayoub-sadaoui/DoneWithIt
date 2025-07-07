import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { DEFAULT_ICON_SIZE } from "@expo/vector-icons/build/createIconSet";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigation from "./app/navigation/AuthNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import FeedNavigator from "./app/navigation/FeedNavigator";
import AccountScreen from "./app/screens/AccountScreen";
import AccountNavigator from "./app/navigation/AccountNavigator";

// const Tweets = ({ navigation }) => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Button
//       title="View details"
//       color="dodgerblue"
//       onPress={() => navigation.navigate("Tweets details", { id: 2 })}
//     />
//   </Screen>
// );
// const TweetsDetails = ({ route }) => (
//   <Screen>
//     <Text>TweetsDetails {route.params.id}</Text>
//     {console.log(route.params)}
//   </Screen>
// );

// const Account = () => (
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// );

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
