export interface PriceVariationProps {
  isUp: boolean;
}

export interface CryptoCardProps {
  logo: string;
  symbol: string;
  name: string;
  price: number;
  priceVariation: number;
}
