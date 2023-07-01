import React from "react";

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

export const CryptoCard: React.FC<CryptoCardProps> = () => {
  return (
    <Container>
      <CryptoInfosContainer>
        <CryptoLogo
          source={{
            uri: "https://logodownload.org/wp-content/uploads/2017/06/bitcoin-logo-1-1.png",
          }}
        />
        <NamesContainer>
          <CryptoSymbol>BTC</CryptoSymbol>
          <CryptoName>Bitcoin</CryptoName>
        </NamesContainer>
      </CryptoInfosContainer>
      <CriptoPriceContainer>
        <CryptoPrice>R$ 200.000,00</CryptoPrice>
        <CryptoPriceVariationContainer>
          {/* <Icon name="arrow-bottom-left" isUp={true} /> */}
          <Icon name="arrow-top-right" isUp={true} />
          <CryptoPriceVariation>+ 10%</CryptoPriceVariation>
        </CryptoPriceVariationContainer>
      </CriptoPriceContainer>
    </Container>
  );
};
