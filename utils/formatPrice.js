export const formatNumberWithComma = (number) =>
  number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const formatPrice = (price) => `${formatNumberWithComma(price)}đ`;

export default formatPrice;
