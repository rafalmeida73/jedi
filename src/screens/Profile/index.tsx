import React from "react";

import { Header } from "../../components/Header";

import { Container, ImageContainer, Name, ProfileImage } from "./styles";

export const Profile = () => {
  return (
    <Container>
      <Header title="Profile" />
      <ImageContainer>
        <ProfileImage
          source={{
            uri: "https://github.com/rafalmeida73.png",
          }}
        />
        <Name>Rafael Santana</Name>
      </ImageContainer>
    </Container>
  );
};
