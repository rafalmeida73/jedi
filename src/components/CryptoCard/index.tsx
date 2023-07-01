import React from "react";

import { formatMoney } from "../../shared/utils/formatMoney";
import { formatNumberToPercent } from "../../shared/utils/formatNumberToPercent";
import { CryptoCardProps } from "./types";

import {
  Container,
  CriptoPriceContainer,
  CryptoInfosContainer,
  CryptoLogo,
  CryptoName,
  CryptoPrice,
  CryptoPriceVariation,
  CryptoPriceVariationContainer,
  CryptoSymbol,
  Icon,
  NamesContainer,
} from "./styles";

export const CryptoCard: React.FC<CryptoCardProps> = ({
  logo,
  symbol,
  name,
  price,
  priceVariation,
}) => {
  return (
    <Container>
      <CryptoInfosContainer>
        <CryptoLogo
          source={{
            uri: logo,
          }}
          resizeMode="contain"
        />
        <NamesContainer>
          <CryptoSymbol>{symbol}</CryptoSymbol>
          <CryptoName>{name}</CryptoName>
        </NamesContainer>
      </CryptoInfosContainer>
      <CriptoPriceContainer>
        <CryptoPrice>{formatMoney(price)}</CryptoPrice>
        <CryptoPriceVariationContainer>
          <Icon
            name={priceVariation < 0 ? "arrow-bottom-left" : "arrow-top-right"}
            isUp={priceVariation >= 0}
          />
          <CryptoPriceVariation isUp={priceVariation >= 0}>
            {formatNumberToPercent(priceVariation)}
          </CryptoPriceVariation>
        </CryptoPriceVariationContainer>
      </CriptoPriceContainer>
    </Container>
  );
};
