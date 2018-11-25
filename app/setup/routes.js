import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Auth from "../screens/auth/auth";

const StackNavigator = defaultRoute =>
  createStackNavigator(
    {
      Auth: {
        screen: Auth
      }
    },
    {
      initialRouteName: defaultRoute
    }
  );

const AppContainer = defaultRoute =>
  createAppContainer(StackNavigator(defaultRoute));

export default AppContainer;
