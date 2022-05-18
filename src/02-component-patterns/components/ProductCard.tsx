import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { createContext } from "react";
import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";

//Creacion del contexto
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

//primer paso: se separa todo en componentes pequenios
export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};

/* 
****** aniadir propiedades al componente padre ***
ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons; */
