import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 ${scale(16)}px;
  margin-top: ${scale(16)}px;
`;
export const Logout = styled.Text`
  color: #152c07;
  font-size: ${scale(16)}px;
  font-weight: 700;
`;
