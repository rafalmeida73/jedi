import React from "react";

import { Container, MoneyContainer, MoneyText, MoneyValue } from "./styles";

export const WalletCard = () => {
  return (
    <Container>
      <MoneyContainer>
        <MoneyText>Total Portfolio</MoneyText>
        <MoneyValue>$ 1.000,00</MoneyValue>
      </MoneyContainer>
    </Container>
  );
};
