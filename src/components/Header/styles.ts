import { MaterialCommunityIcons } from "@expo/vector-icons";
import { scale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Title = styled.Text`
  margin-top: ${scale(16)}px;
  font-size: ${scale(24)}px;
  margin-bottom: ${scale(16)}px;
  font-weight: 600;
`;

export const IconButton = styled.TouchableOpacity``;

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: scale(30),
  color: theme.colors.background.black,
}))``;
