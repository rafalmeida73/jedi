import "intl";

export const formatMoney = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })
    .format(value)
    .replace(/\s/g, "$1 ");
};
