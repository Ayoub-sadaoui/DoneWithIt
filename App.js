import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Screen from "./app/components/Screen";
import AppImagePicker from "./app/components/forms/AppImagePicker";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}
