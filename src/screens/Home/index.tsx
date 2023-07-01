import React, { useState } from "react";

import { CryptoCard } from "../../components/CryptoCard";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";

import { Container, List, Separator } from "./styles";

export const Home = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleRefresh = () => {
    setIsRefreshing(true);
    console.log("refreshing");
  };

  return (
    <Container>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <List
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => <CryptoCard />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          onRefresh={() => handleRefresh()}
          refreshing={isRefreshing}
        />
      )}
    </Container>
  );
};
