import { getCartProductFromLS } from "./getCartProducts";


export const fetchQuantityFromCartLS = (id , price) => {
  let cartProducts = getCartProductFromLS();

  let existingProduct = cartProducts.find((curProd) => curProd.id === id);
  let quantity = 1;

  if (existingProduct) {
    quantity = existingProduct.quantity;
    price = existingProduct.price;
  }

  return { quantity, price }; //jab 2 sai jyda return krna ho create obj like that
};