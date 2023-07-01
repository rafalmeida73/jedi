import { MaterialCommunityIcons } from "@expo/vector-icons";
import { scale } from "react-native-size-matters";
import { css } from "styled-components";
import styled from "styled-components/native";

import { IconContainerColor } from "./enum";
import { IconContainerProps } from "./types";

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: ${scale(20)}px;
  background-color: #ffffff;
  border-radius: ${scale(10)}px;
  gap: ${scale(25)}px;
`;

export const IconContainer = styled.View<IconContainerProps>`
  border-radius: ${scale(10)}px;
  padding: ${scale(12)}px;

  ${({ type }) =>
    css`
      background-color: ${IconContainerColor[type]};
    `};
`;
export const InfosContainer = styled.View`
  gap: ${scale(15)}px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: scale(20),
  color: theme.colors.background.black,
}))``;

export const Title = styled.Text`
  color: #152c07;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const Description = styled.Text`
  color: #5d5c5d;
  font-size: ${scale(12)}px;
  font-style: normal;
  font-weight: 400;
`;

export const Date = styled.Text`
  color: #bebebe;
  font-size: ${scale(12)}px;
  font-style: normal;
  font-weight: 400;
`;
