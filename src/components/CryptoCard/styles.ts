import { MaterialCommunityIcons } from "@expo/vector-icons";
import { scale } from "react-native-size-matters";
import styled, { css } from "styled-components/native";

import { ArrowIconProps } from "./types";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${scale(10)}px;
`;

export const CryptoInfosContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${scale(10)}px;
`;

export const NamesContainer = styled.View`
  flex-direction: column;
`;

export const CryptoLogo = styled.Image`
  height: ${scale(30)}px;
  width: ${scale(30)}px;
`;

export const CryptoSymbol = styled.Text`
  font-weight: bold;
  font-size: ${scale(15)}px;
`;

export const CryptoName = styled.Text``;

export const CriptoPriceContainer = styled.View`
  align-items: flex-end;
`;

export const CryptoPrice = styled.Text`
  font-weight: bold;
  font-size: ${scale(15)}px;
`;

export const CryptoPriceVariation = styled.Text``;

export const CryptoPriceVariationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: scale(15),
}))<ArrowIconProps>`
  ${({ isUp, theme }) =>
    isUp
      ? css`
          color: ${theme.colors.status.high};
        `
      : css`
          color: ${theme.colors.status.low};
        `}
`;
