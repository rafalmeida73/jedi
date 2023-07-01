import { FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 ${scale(16)}px;
  margin-top: ${scale(16)}px;
`;

export const List = styled.FlatList`
  margin-top: ${scale(16)}px;
  margin-bottom: ${scale(75)}px;
` as unknown as typeof FlatList;

export const Separator = styled.View`
  height: ${scale(1)}px;
  margin-bottom: ${scale(10)}px;

  ${({ theme }) =>
    css`
      background-color: ${theme.colors.background.gray};
    `};
`;
