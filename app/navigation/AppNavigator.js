import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import routes from "./routes";
import ListingEditScreen from "../screens/ListingEditScreen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FeedNavigator from "./FeedNavigator";

import AccountNavigator from "./AccountNavigator";
import NewListingBtn from "./NewListingBtn";

const Tab = createBottomTabNavigator();
function AppNavigator(props) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),

          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="add"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: ({ size, color }) => (
            <NewListingBtn
              onPress={() => {
                navigation.navigate(routes.ADD_LISTING);
              }}
            />
          ),
          // tabBarIcon: ({ size, color }) => (
          //   <MaterialCommunityIcons name="plus" size={size} color={color} />
          // ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
