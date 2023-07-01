import React from "react";

import { Header } from "../../components/Header";
import { WalletCard } from "../../components/WalletCard";

import { Container } from "./styles";

export const Wallet = () => {
  return (
    <Container>
      <Header title="Wallet" />
      <WalletCard />
    </Container>
  );
};
