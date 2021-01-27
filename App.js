import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from 'react-native';

import navigationRef from './RootNavigation';

import Home from './components/home';
import Header from './components/common/header';
import FooterNav from './components/common/FooterNav';

const Stack = createStackNavigator();

// TODO: figure out routing for home
export default function App() {
  return (
    <NavigationContainer
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      ref={navigationRef}
    >
      <Stack.Navigator initialRouteName="Home" headerMode="screen">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <Header headerDisplay="Home" />,
          }}
        ></Stack.Screen>
		  </Stack.Navigator>
		  <FooterNav></FooterNav>
    </NavigationContainer>
  );
}
