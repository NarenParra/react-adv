import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { createContext } from "react";
import {
  ProductContextProps,
  ProductCardProduct,
} from "../interfaces/interfaces";

//Creacion del contexto
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

//primer paso: se separa todo en componentes pequenios
export const ProductCard = ({ children, product }: ProductCardProduct) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

/* 
****** aniadir propiedades al componente padre ***
ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons; */
