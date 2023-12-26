import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContactStack, ProductStack } from './StackNavigator';
import Settings from '../container/Settings/Settings';


export default function BottomTabNavigator() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={ProductStack} />
            <Tab.Screen name='Contact' component={ContactStack} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}