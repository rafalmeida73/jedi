import "intl";

export const formatNumberToPercent = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 1,
  })
    .format(value / 100)
    .replace("-", "");
};
