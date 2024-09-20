export const formatPrice = (price: number) => Number(price).toFixed(2);

export const setPrice = (price: number, discount: number | null) => {
  if (discount) {
    const calcDiscount = Number(price - price * (discount / 100));
    return formatPrice(calcDiscount);
  }

  return formatPrice(price);
};
