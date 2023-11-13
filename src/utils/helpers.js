export const formatCurrency = (amount, currencyCode = "PLN") => {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};
