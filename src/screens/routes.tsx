import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { ButtonNewPost } from "../components/ButtonNewPost";
import { NewPost } from "./NewPost";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#A4A4A4",
        tabBarStyle: {
          backgroundColor: "#2563EA",
          borderTopColor: "transparent",
          paddingBottom: 6,
          paddingTop: 6,
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Novo Post"
        component={NewPost}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, size, color }) => (
            <ButtonNewPost size={size} color={color} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
