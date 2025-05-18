import { Tabs } from "expo-router";
import React, { FunctionComponent } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

// Custom Tab Bar Component
const CustomTabBar: FunctionComponent<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const icons: Record<string, string> = {
    home: "home",
    favorites: "heart",
    ads: "pluscircle",
    notifications: "notifications",
    profile: "person",
    chats: "chatbubble-ellipses-outline",
  };

  const labels: Record<string, string> = {
    home: "الرئيسية",
    favorites: "المفضلة",
    ads: "إضافة",
    notifications: "الإشعارات",
    profile: "حسابي",
    chats: "المحادثات",
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true, // ✅ required for TypeScript
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const isCenter = route.name === "ads";
        const color = isFocused ? "#2EC8DB" : "#6B6B6B";

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={isCenter ? styles.centerButton : styles.tabButton}
            activeOpacity={0.8}
          >
            {isCenter ? (
              <View style={styles.centerCircle}>
                <AntDesign name="plus" size={26} color="#fff" />
              </View>
            ) : (
              <View style={styles.tabItem}>
                <Ionicons name={icons[route.name]} size={22} color={color} />
                <Text style={[styles.label, { color }]}>{labels[route.name]}</Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// Tab Layout with Custom Tab Bar
export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="home" options={{ title: "الرئيسية" }} />
      <Tabs.Screen name="favorites" options={{ title: "المفضلة" }} />
      <Tabs.Screen name="ads" options={{ title: "إضافة" }} />
      <Tabs.Screen name="notifications" options={{ title: "الإشعارات" }} />
      <Tabs.Screen name="profile" options={{ title: "حسابي" }} />
      <Tabs.Screen name="chats" options={{ title: "المحادثات" }} />
    </Tabs>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    height: 70,
    borderTopWidth: 0.3,
    borderColor: "#e0e0e0",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 8,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
  },
  tabItem: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
  centerButton: {
    position: "relative",
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  centerCircle: {
    marginBottom: -20, 

    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2EC8DB",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2.5,
  },



});