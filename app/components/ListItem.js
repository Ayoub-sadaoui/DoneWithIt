import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Swipeable } from "react-native-gesture-handler";
import ListItemDelete from "./ListItemDelete";
import AppIcon from "./AppIcon";
import colors from "../config/colors";

function ListItem({
  image,
  title,
  description,
  renderRightAction,
  backgroundColor,
  iconbgcolor,
  size,
  name,
  fontSize,
  fontWeight,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightAction}>
        <TouchableHighlight underlayColor="#fff">
          <View style={[styles.item, { backgroundColor: backgroundColor }]}>
            {image ? (
              <Image style={styles.image} source={image} />
            ) : (
              <AppIcon backgroundColor={iconbgcolor} name={name} size={size} />
            )}
            <View style={styles.details}>
              <Text
                style={[
                  styles.title,
                  {
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                    textTransform: "capitalize",
                  },
                ]}
              >
                {title}
              </Text>
              {description && (
                <Text style={styles.description} numberOfLines={1}>
                  {description}
                </Text>
              )}
            </View>
            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color="#777"
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 15,
    backgroundColor: colors.light, // To ensure consistent swipe visuals
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "grey",
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ListItem;
