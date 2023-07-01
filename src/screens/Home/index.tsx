import React, { useCallback, useEffect, useState } from "react";

import { CryptoCard } from "../../components/CryptoCard";
import { Error } from "../../components/Error";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Search } from "../../components/Search";
import { useCryptos } from "../../shared/hooks/useCryptos";

import { Container, List, Separator } from "./styles";

export const Home = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const {
    data,
    loading,
    handleRefetchCryptoList,
    error,
    handleNextPage,
    handleFetchCryptos,
    loadingMore,
    isSearching,
  } = useCryptos();

  const handleRefresh = useCallback(async () => {
    try {
      setIsRefreshing(true);

      await handleRefetchCryptoList();
    } catch (error) {
      console.error(error);
    } finally {
      setIsRefreshing(false);
    }
  }, [handleRefetchCryptoList]);

  useEffect(() => {
    handleFetchCryptos();
  }, [handleFetchCryptos]);

  return (
    <Container>
      <Header />
      <Search />
      {error && <Error />}

      {loading && !error && !loadingMore && <Loading />}

      {!error && data?.length && !loading && (
        <List
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <CryptoCard
              logo={item?.image}
              symbol={item?.symbol}
              name={item.name}
              price={item?.current_price}
              priceVariation={item?.price_change_percentage_24h}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          onRefresh={() => handleRefresh()}
          refreshing={isRefreshing}
          onEndReachedThreshold={0.7}
          onEndReached={() => {
            if (!loadingMore && !isSearching) {
              handleNextPage();
            }
          }}
          ListFooterComponent={() => (
            <>{loadingMore && <Loading height={50} widht={50} />}</>
          )}
        />
      )}
    </Container>
  );
};
