export const cart = [];

export const addProductToCart = (product) => {
  const filter = cart.find((item) => item.id);

  if (
    filter &&
    filter.productId === product.productId &&
    filter.observations === product.observations
  ) {
    filter.quantity += product.quantity;
    filter.total += Number(product.total);
  } else cart.push(product);
};
