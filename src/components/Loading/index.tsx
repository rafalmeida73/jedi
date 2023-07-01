import React, { useRef } from "react";

import AnimatedLottieView from "lottie-react-native";
import { scale } from "react-native-size-matters";

import animationLoading from "../../assets/loading.json";

import { Container } from "./styles";

export const Loading = () => {
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
        source={animationLoading}
      />
    </Container>
  );
};
