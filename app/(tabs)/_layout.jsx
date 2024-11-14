import { StatusBar } from 'expo-status-bar';
import { Tabs } from "expo-router";
import { Image, Text, View, Animated } from "react-native";
import { icons } from '../../constants';
import { useState } from "react";

const TabIcon = ({ icon, color, name, focused }) => {
  const scale = useState(new Animated.Value(1))[0];

  // Scale effect on focused state
  Animated.timing(scale, {
    toValue: focused ? 1.1 : 1,
    duration: 150,
    useNativeDriver: true,
  }).start();

  return (
    <View className="flex items-center justify-center gap-1">
      <Animated.View
        style={{
          transform: [{ scale }],
          backgroundColor: focused ? "#FFA00120" : "transparent", // background on focus
          padding: 10,
          borderRadius: 20,
          shadowColor: focused ? "#FFA001" : "#000",
          shadowOpacity: focused ? 0.3 : 0,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 4 },
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{ tintColor: color, width: 25, height: 25 }}
        />
      </Animated.View>
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 80,
          },
        }}
      >
        <Tabs.Screen
          name="timetable"
          options={{
            title: "timetable",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.timetable} color={color} name="timetable" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="message"
          options={{
            title: "message",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.message} color={color} name="message" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="blogs"
          options={{
            title: "blogs",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.blogs} color={color} name="blogs" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="ebook"
          options={{
            title: "ebook",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.ebook} color={color} name="ebook" focused={focused} />
            ),
          }}
        />
        
      </Tabs>
      
    </>
  );
};

export default TabLayout;