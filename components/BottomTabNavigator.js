import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TransactionScreen from "../Screens/Transaction";
import SearchScreen from "../Screens/Search";
const Tab = createBottomTabNavigator();
export default class BottomTabNavigator extends Component {
    render() {
      return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Transaction" component={TransactionScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
  }