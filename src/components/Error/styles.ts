import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: ${scale(20)}px 0;
`;
export const Title = styled.Text`
  margin-top: ${scale(20)}px;
  font-size: ${scale(20)}px;
  font-weight: bold;
`;
