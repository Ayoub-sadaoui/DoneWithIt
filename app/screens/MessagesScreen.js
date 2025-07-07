import React, { useState } from "react";
import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import constants from "expo-constants";
import ListItemDelete from "../components/ListItemDelete";

function MessagesScreen(props) {
  const messages = [
    {
      id: 1,
      title: "ayoub",
      desc: "wee lhaaj esma3 arwah tchoo ns7a9k tres important matawalch",
      image: require("../assets/ayoub.jpeg"),
    },
    {
      id: 2,
      title: "fodil",
      desc: "9oli sahbi wach kayn ghir lkhir ani jay matt9ala9ch kach ma njiblk m3aya",
      image: require("../assets/ayoub.jpeg"),
    },
    {
      id: 3,
      title: "islem",
      desc: "twiiil",
      image: require("../assets/ayoub.jpeg"),
    },
  ];
  const [msg, setmsg] = useState(messages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (item) => {
    setmsg(msg.filter((m) => m.id !== item.id));
  };
  return (
    <Screen>
      <FlatList
        style={{ width: "100%" }}
        data={msg}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            description={item.desc}
            fontWeight="bold"
            fontSize={15}
            renderRightAction={() => (
              <ListItemDelete onPress={() => handleDelete(item)} />
            )}
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
        refreshing={refreshing}
        onRefresh={() => {
          setmsg(messages);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
