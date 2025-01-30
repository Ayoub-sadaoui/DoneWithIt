import React from "react";
import { View, statusbar } from "react-native";
import AppCard from "../components/AppCard";
import ListItem from "../components/ListItem";

function ListingDetailsScreen() {
  return (
    <View style={{ width: "100%", marginTop: 20, gap: 60 }}>
      <AppCard
        title="Red jacket for sale"
        subtitle="100$"
        image={require("../assets/jacket.jpg")}
        width="100%"
      />
      <ListItem
        title="Ayoub sadaoui"
        description="UI/UX developer"
        image={require("../assets/ayoub.jpeg")}
      />
    </View>
  );
}

export default ListingDetailsScreen;
