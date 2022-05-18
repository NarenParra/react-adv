import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setshoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    //    console.log("on product count change", count, product);
    setshoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;
      /*       //eliminar del estado cuando no hay productos
    if (count === 0) {
      //por medio de la destructuracion
      //saca el producto con el id y lo elimina y retorna el resto
      const { [product.id]: toDelete, ...rest } = oldShoppingCar;
      return rest;
    }

    return { ...oldShoppingCar, [product.id]: { ...product, count } }; */
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
