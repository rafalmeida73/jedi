import React, { useRef } from "react";

import AnimatedLottieView from "lottie-react-native";
import { scale } from "react-native-size-matters";

import animationError from "../../assets/error.json";

import { Container, Title } from "./styles";

export const Error = () => {
  const animation = useRef(null);

  return (
    <Container>
      <AnimatedLottieView
        autoPlay
        ref={animation}
        style={{
          width: scale(200),
          height: scale(200),
        }}
        source={animationError}
      />
      <Title>Opps!</Title>
    </Container>
  );
};
