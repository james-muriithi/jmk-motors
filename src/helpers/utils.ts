export const numberFormat = (
  value: number,
  { minimumFractionDigits = 0, maximumFractionDigits = 0 } = {}
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value);
};
