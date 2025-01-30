import React from "react";
import Screen from "../components/Screen";
import { FlatList, View, StyleSheet } from "react-native";
import AppCard from "../components/AppCard";
import { requestFormReset } from "react-dom";

function ListingsScreen(props) {
  const data = [
    {
      id: 1,
      image: require("../assets/jacket.jpg"),
      title: "Red Jacket for sale",
      price: 100,
    },
    {
      id: 2,
      image: require("../assets/couch.jpg"),
      title: "Couch for sale",
      price: 400,
    },
  ];
  return (
    <Screen style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            image={item.image}
            title={item.title}
            subtitle={item.price}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, marginVertical: 10 }} />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
});

export default ListingsScreen;
