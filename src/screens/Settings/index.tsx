import React from "react";

import { BackHandler } from "react-native";

import { Header } from "../../components/Header";

import { Container, Logout } from "./styles";

export const Settings = () => {
  return (
    <Container>
      <Header title="Settings" />
      <Logout onPress={() => BackHandler.exitApp()}>Logout</Logout>
    </Container>
  );
};
