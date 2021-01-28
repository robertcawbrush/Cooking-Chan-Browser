import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from './RootNavigation';

import Home from './components/home';
import Header from './components/common/header';
import FooterNav from './components/common/FooterNav';
import BoardManagement from "./components/boards/boardManagement";

import * as routeConstants from './constants/routeConstants';
import * as appStyles from './components/styles/body.style';

const Stack = createStackNavigator();

export default function App() {
	return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator initialRouteName="Home" headerMode="screen">
        <Stack.Screen
          name={routeConstants.HOME}
          component={Home}
          options={{
			  header: () => <Header headerDisplay="Home" />,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name={routeConstants.BOARD_MANAGEMENT}
          component={BoardManagement}
          options={{
            header: () => <Header headerDisplay="Board Management" />,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
      <FooterNav></FooterNav>
    </NavigationContainer>
  );
}