import { StatusBar } from 'expo-status-bar';
import { Tabs } from "expo-router";
import { Image, Text, View, Animated } from "react-native";
import { icons } from '../../constants';
import { useState } from "react";

const TabIcon = ({ icon, color, name, focused }) => {
  const scale = useState(new Animated.Value(1))[0];
  
  // Apply smooth spring animation
  Animated.spring(scale, {
    toValue: focused ? 1.15 : 1,
    friction: 7, // Adjust for a more refined bounce effect
    useNativeDriver: true,
  }).start();

  return (
    <View style={{ alignItems: "center", justifyContent: "center", marginTop: 10 }}>
      <Animated.View
        style={{
          transform: [{ scale }],
          backgroundColor: focused ? "#FFA00120" : "transparent", // Subtle background color for focused tab
          padding: 15, // Increase padding for better spacing
          borderRadius: 35, // Larger rounded corners for a more modern look
          shadowColor: focused ? "#FFA001" : "#2A2B3D",
          shadowOpacity: focused ? 0.25 : 0.15,
          shadowRadius: focused ? 12 : 8,
          shadowOffset: { width: 0, height: 6 },
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{ tintColor: color, width: 32, height: 32 }} // Slightly larger icons for better visual impact
        />
      </Animated.View>
      <Text
        style={{
          color: color,
          fontSize: 13,
          fontWeight: focused ? "600" : "400",
          marginTop: 6,
          letterSpacing: 0.5, // Add spacing for the text
          textTransform: "capitalize", // Capitalize first letter of the text
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#1C1C2D",
            borderTopWidth: 1,
            borderTopColor: "#2A2B3D",
            height: 80, // Increase height for a more spacious look
            paddingBottom: 20, // Ensure enough padding at the bottom for a comfortable touch area
            elevation: 10, // Add shadow for better depth
          },
        }}
      >
        <Tabs.Screen
          name="timetable"
          options={{
            title: "Timetable",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.timetable} color={color} name="Timetable" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="message"
          options={{
            title: "Message",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.message} color={color} name="Message" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="blogs"
          options={{
            title: "Blogs",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.blogs} color={color} name="Blogs" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="ebook"
          options={{
            title: "Ebook",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.ebook} color={color} name="Ebook" focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
