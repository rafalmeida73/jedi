import { Ionicons } from "@expo/vector-icons";
import { scale } from "react-native-size-matters";
import styled, { css } from "styled-components/native";

export const Error = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.status.low};
  `}

  font-weight: 600;
`;

export const TextInput = styled.TextInput`
  ${({ theme }) => css`
    background-color: ${theme.colors.background.secondary};
    height: ${scale(50)}px;
    padding-left: ${scale(55)}px;
    border-radius: ${scale(10)}px;
    font-size: ${scale(16)}px;
  `}
`;

export const InputContainer = styled.View``;

export const LeftIcon = styled.View`
  position: absolute;
  bottom: 0;
  top: 30%;
  left: 0;
  left: ${scale(20)}px;
`;

export const Icon = styled(Ionicons).attrs(({ theme }) => ({
  size: scale(20),
  color: theme.colors.background.black,
}))``;
