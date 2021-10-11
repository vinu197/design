import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from '../../constants/theme';
import HomeScreen from '../HomeComponent/HomeScreen';
import SearchScreen from '../SearchComponent/SearchScreen';
// import MyAccountScreen from '../MyAccountComponent/MyAccountScreen';
import NotificationsScreen from '../NotificationsComponent/Notifications';
import LatestNewsScreen from '../LatestNewsComponent/LatestNewsScreen';
import MyFamilyScreen from '../MyFamilyComponent/MyFamilyScreen';


const Tab = createMaterialBottomTabNavigator();

function CustomBottomNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            shifting={true}
            activeColor={COLORS.secondary}
            barStyle={{
                backgroundColor: COLORS.white,
                borderTopWidth: 0,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name="home" color={focused ? COLORS.secondary : COLORS.labelColor} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name="search" color={focused ? COLORS.secondary : COLORS.labelColor} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="NewsFeed"
                component={LatestNewsScreen}
                options={{
                    tabBarLabel: 'News Feed',
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name="text-snippet" color={focused ? COLORS.secondary : COLORS.labelColor} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={MyFamilyScreen}
                options={{
                    tabBarLabel: 'My Family',
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name="family-restroom" color={focused ? COLORS.secondary : COLORS.labelColor} size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default CustomBottomNavigation;