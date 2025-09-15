import React from 'react';
import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons'

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarInactiveTintColor: "#0000006b",
                tabBarActiveTintColor: "#000000"
            }}>
            <Tabs.Screen name='dashboard' options={{
                tabBarLabel: "Home",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Feather name='home' style={{ color: focused ? "#000000" : "#0000006b" }} size={20} />
                )
            }} />,
            <Tabs.Screen name='user-details' options={{
                tabBarLabel: "User",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Feather name='user' style={{ color: focused ? "#000000" : "#0000006b" }} size={20} />
                )
            }} />,

        </Tabs>
    )
}