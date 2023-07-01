import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${scale(112)}px;
  justify-content: center;
  background-color: #5ede99;
  border-radius: ${scale(10)}px;
  padding: ${scale(20)}px;
`;

export const MoneyContainer = styled.View`
  gap: ${scale(8)}px;
`;

export const MoneyText = styled.Text`
  color: #fff;
  font-size: ${scale(16)}px;
  font-weight: 600;
`;

export const MoneyValue = styled.Text`
  color: #fff;
  font-size: ${scale(32)}px;
  font-weight: 700;
`;
