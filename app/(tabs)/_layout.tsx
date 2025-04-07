import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import "../globals.css"
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={18} name="house.fill" color={color} />
          ),
        }}
      />
      

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon name="person-circle-outline" size={18} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ads"
        options={{
          title: "Create an ad",
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircle" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
