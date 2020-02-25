import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import MyOrders from "../screens/MyOrders";
import Home from "../screens/Home";
import Detail from "../screens/Detail";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Register: {
      screen: Signup
    },
    Orders: {
      screen: MyOrders
    },
    Home: {
      screen: Home
    },
    Details: {
      screen: Detail
    }
  },
  {
    headerMode: null
  }
);

export default createAppContainer(AppNavigator);
