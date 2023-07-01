import React, { useCallback } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { scale } from "react-native-size-matters";
import { useTheme } from "styled-components/native";

import { Home } from "../screens/Home";
import { Notifications } from "../screens/Notifications";
import { Profile } from "../screens/Profile";
import { Settings } from "../screens/Settings";
import { Wallet } from "../screens/Wallet";
import { Icons, Route } from "./enums";

import { Circle, IconContainer } from "./styles";

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
  const theme = useTheme();

  const barIcon = useCallback(
    (title: string, color: string, focused: boolean) => {
      return (
        <IconContainer>
          <MaterialCommunityIcons
            name={Icons[title]}
            size={scale(30)}
            color={color}
          />
          {focused && <Circle />}
        </IconContainer>
      );
    },
    []
  );

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.background.black,
          tabBarInactiveTintColor: theme.colors.background.secondary,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            position: "absolute",
            height: scale(70),
            marginHorizontal: scale(20),
            bottom: scale(15),
            borderRadius: scale(30),
            borderColor: theme.colors.background.secondary,
          },
        }}
        initialRouteName={Route.Home}
      >
        <Screen
          name={Route.Home}
          component={Home}
          options={{
            tabBarIcon: ({ color, focused }) =>
              barIcon(Route.Home, color, focused),
          }}
        />
        <Screen
          name={Route.Wallet}
          component={Wallet}
          options={{
            tabBarIcon: ({ color, focused }) =>
              barIcon(Route.Wallet, color, focused),
          }}
        />
        <Screen
          name={Route.Notifications}
          component={Notifications}
          options={{
            tabBarIcon: ({ color, focused }) =>
              barIcon(Route.Notifications, color, focused),
          }}
        />
        <Screen
          name={Route.Profile}
          component={Profile}
          options={{
            tabBarIcon: ({ color, focused }) =>
              barIcon(Route.Profile, color, focused),
          }}
        />
        <Screen
          name={Route.Settings}
          component={Settings}
          options={{
            tabBarIcon: ({ color, focused }) =>
              barIcon(Route.Settings, color, focused),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
