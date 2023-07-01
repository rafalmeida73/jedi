import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 ${scale(16)}px;
  margin-top: ${scale(16)}px;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: ${scale(80)}px;
  height: ${scale(80)}px;
  border-radius: ${scale(40)}px;
`;

export const Name = styled.Text`
  margin-top: ${scale(15)}px;
  color: #152c07;
  text-align: center;
  font-size: ${scale(24)}px;
  font-weight: 700;
`;
