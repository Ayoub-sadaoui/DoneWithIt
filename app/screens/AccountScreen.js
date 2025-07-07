import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import AppIcon from "../components/AppIcon";
import ListingDetailsScreen from "./ListingDetailsScreen";

const links = [
  {
    id: 1,
    title: "My listings",
    backgroundColor: "tomato",
    icon: "format-list-bulleted",
    navigate: "Listings",
  },
  {
    id: 2,
    title: "My messages",
    backgroundColor: "dodgerblue",
    icon: "email",
    navigate: "Messages",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen>
      <View style={{ backgroundColor: "#eee", height: "100%", gap: 30 }}>
        <View
          style={{
            paddingVertical: 10,
            height: 100,
            backgroundColor: "#fff",
            marginBottom: 10,
          }}
        >
          <ListItem
            image={require("../assets/ayoub.jpeg")}
            title="Ayoub"
            description="a.sadaoui@univ-boumerdes.dz"
          />
        </View>
        <View style={{ backgroundColor: "#fff" }}>
          <FlatList
            data={links}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ListItem
                name={item.icon}
                iconbgcolor={item.backgroundColor}
                title={item.title}
                size={35}
                fontSize={14}
                fontWeight="500"
                onPress={() => navigation.navigate(item.navigate)}
              />
            )}

            // ItemSeparatorComponent={() => (
            //   <View
            //     style={{
            //       height: 1,
            //       marginVertical: 0,
            //     }}
            //   />
            // )}
          />
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            height: 60,
            justifyContent: "center",
          }}
        >
          <ListItem
            iconbgcolor="#fff700"
            name="logout"
            size={35}
            title="logout"
            fontSize={14}
            fontWeight="500"
          />
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  item: {
    width: "100%",
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
export default AccountScreen;
