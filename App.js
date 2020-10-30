import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import Home from './screens/Home';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Search from './screens/Search';
import ComingSoon from './screens/ComingSoon';
import Downloads from './screens/Downloads';
import More from './screens/More';
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          barStyle={{ backgroundColor: '#221f1f' }} 
          shifting={false}
          inactiveColor='grey'
          tabBarOptions={{
            labelStyle: { fontSize: 12 },
            showLabel: true,
            tabStyle: { width: 100 },
            showIcon: true,
          }}
      >
        <Tab.Screen name='Home' component={Home}
          options={{
            tabBarLabel:<Text style={{ fontSize: 10, }}> Home</Text>,
            tabBarIcon: ({ color }) => (
              <Octicons name="home" color={color} size={23} />
            ),
          }}
        />
        <Tab.Screen name='Search' component={Search}
          options={{
            tabBarLabel: <Text style={{ fontSize: 10, }}> Search</Text>,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="search" color={ color } size={23} />
            )
            }}
        />
        <Tab.Screen name='ComingSoon' component={ComingSoon}
         options={{
          tabBarLabel: <Text style={{ fontSize: 10, }}> Coming Soon</Text>,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-to-photos" color={ color } size={20} />
          )
          }}
        />
        <Tab.Screen name='Downloads' component={Downloads}
         options={{
          tabBarLabel: <Text style={{ fontSize: 10, }}> Downloads</Text>,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="file-download" color={ color } size={22} />
          )
          }}
        />
        <Tab.Screen name='More' component={More}
         options={{
          tabBarLabel:<Text style={{ fontSize: 10, }}> More</Text>,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="dehaze" color={ color } size={23} />
          )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
