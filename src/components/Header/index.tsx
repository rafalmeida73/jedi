import React, { useCallback } from "react";

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { BackHandler } from "react-native";

import { HeaderProps } from "./types";

import { Container, Icon, IconButton, Title } from "./styles";

export const Header: React.FC<HeaderProps> = ({
  icon = "arrow-left",
  title = "Crypto",
}) => {
  const { canGoBack, goBack } =
    useNavigation<BottomTabNavigationProp<ParamListBase>>();

  const handleGoBack = useCallback(() => {
    if (canGoBack()) {
      return goBack();
    }

    BackHandler.exitApp();
  }, [canGoBack, goBack]);

  return (
    <Container>
      <IconButton onPress={handleGoBack}>
        <Icon name={icon} />
      </IconButton>
      <Title>{title}</Title>
    </Container>
  );
};
