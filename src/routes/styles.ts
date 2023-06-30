import { scale } from "react-native-size-matters";
import styled, { css } from "styled-components/native";

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.View`
  height: ${scale(10)}px;
  width: ${scale(10)}px;
  margin-top: ${scale(5)}px;
  border-radius: ${scale(10)}px;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.background.black};
    `};
`;
