import React, { createContext, useCallback, useContext, useState } from "react";

import { api } from "../../../services/apiCoinGecko";
import {
  CryptoListResponse,
  CryptoSearchResponse,
  CryptosProvider,
  DataResponse,
  UseCryptoResponse,
} from "./types";

const CryptosContext = createContext({} as UseCryptoResponse);

const CryptoProvider: React.FC<CryptosProvider> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<DataResponse[]>();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleFetchCryptos = useCallback(async () => {
    try {
      setError(false);
      setIsSearching(false);

      setIsLoading(true);

      const response = await api.get<CryptoListResponse[]>("coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      });

      const list = response?.data?.map?.((crypto) => ({
        id: crypto?.id,
        image: crypto?.image,
        symbol: crypto?.symbol,
        name: crypto?.name,
        current_price: crypto?.current_price,
        price_change_percentage_24h: crypto?.price_change_percentage_24h,
      }));

      setData(list);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSeachCryptos = useCallback(async (cryptoName: string) => {
    try {
      setIsSearching(true);
      setIsLoading(true);
      setError(false);

      const response = await api.get<CryptoSearchResponse>("/search", {
        params: {
          query: cryptoName,
        },
      });

      const cryptosIds = response?.data?.coins
        ?.map?.((crypto) => crypto?.id)
        .toString();

      const marketResponse = await api.get<CryptoListResponse[]>(
        "coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            sparkline: false,
            ids: cryptosIds,
          },
        }
      );

      const list = marketResponse?.data?.map?.((crypto) => ({
        id: crypto?.id,
        image: crypto?.image,
        symbol: crypto?.symbol,
        name: crypto?.name,
        current_price: crypto?.current_price,
        price_change_percentage_24h: crypto?.price_change_percentage_24h,
      }));

      setData(list);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }, []);

  const handleNextPage = useCallback(async () => {
    try {
      setIsLoadingMore(true);
      const response = await api.get<CryptoListResponse[]>("coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 100,
          page: currentPage + 1,
          sparkline: false,
        },
      });

      const list = response?.data?.map?.((crypto) => ({
        id: crypto?.id,
        image: crypto?.image,
        symbol: crypto?.symbol,
        name: crypto?.name,
        current_price: crypto?.current_price,
        price_change_percentage_24h: crypto?.price_change_percentage_24h,
      }));

      setData((oldValue) => [...oldValue, ...list]);
      setCurrentPage((oldValue) => oldValue + 1);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoadingMore(false);
    }
  }, [currentPage]);

  const handleRefetchCryptoList = useCallback(async () => {
    try {
      setIsSearching(false);
      await handleFetchCryptos();
    } catch (error) {
      setError(true);
    }
  }, [handleFetchCryptos]);

  const value = {
    data,
    error,
    loading: isLoading,
    handleRefetchCryptoList,
    handleNextPage,
    loadingMore: isLoadingMore,
    handleFetchCryptos,
    handleSeachCryptos,
    isSearching,
  };

  return (
    <CryptosContext.Provider value={value}>{children}</CryptosContext.Provider>
  );
};

const useCryptos = (): UseCryptoResponse => {
  const context = useContext(CryptosContext);
  if (context === undefined) {
    throw new Error("No context on TelephoneModalContext");
  }
  return context;
};

export { useCryptos };
export default CryptoProvider;
