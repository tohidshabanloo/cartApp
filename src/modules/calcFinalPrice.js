export const calcFinalPrice = (price, discount, count) => {
  let result = count * (price - (price * discount) / 100);

  return result;
};
