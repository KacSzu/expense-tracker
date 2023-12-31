export const formatCurrency = (amount, currencyCode = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
};
export function convertDateStringToISO(dateString) {
  // Parse the input date string
  const inputDate = new Date(dateString);

  // Format the date as ISO string
  const isoString = inputDate.toISOString();

  return isoString;
}

export const formatDate = (date) => {
  const options = { month: "short", day: "numeric", year: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};
export const getToday = function (options = {}) {
  const today = new Date();

  if (options?.end) today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};
