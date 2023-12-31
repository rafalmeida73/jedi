import React, { useRef } from "react";

import AnimatedLottieView from "lottie-react-native";
import { scale } from "react-native-size-matters";

import animationLoading from "../../assets/loading.json";
import { LoadingProps } from "./types";

import { Container } from "./styles";

export const Loading: React.FC<LoadingProps> = ({
  height = 200,
  widht = 200,
}) => {
  const animation = useRef(null);

  return (
    <Container>
      <AnimatedLottieView
        autoPlay
        ref={animation}
        style={{
          width: scale(widht),
          height: scale(height),
        }}
        source={animationLoading}
      />
    </Container>
  );
};
