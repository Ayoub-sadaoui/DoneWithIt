import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import AppIcon from "../components/AppIcon";

const links = [
  {
    id: 1,
    title: "My listings",
    backgroundColor: "tomato",
    icon: "format-list-bulleted",
  },
  {
    id: 2,
    title: "My account",
    backgroundColor: "dodgerblue",
    icon: "email",
  },
];

function MyAccountScreen(props) {
  return (
    <Screen>
      <View style={{ backgroundColor: "#eee", flex: 1, gap: 30 }}>
        <View style={{ paddingVertical: 15, backgroundColor: "#fff" }}>
          <ListItem
            image={require("../assets/ayoub.jpeg")}
            title="Ayoub"
            description="a.sadaoui@univ-boumerdes.dz"
          />
        </View>
        <View style={{ backgroundColor: "#fff", paddingVertical: 10 }}>
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
              />
            )}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 1,
                  marginVertical: 5,
                }}
              />
            )}
          />
        </View>
        <View style={{ paddingVertical: 10, backgroundColor: "#fff" }}>
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
export default MyAccountScreen;
