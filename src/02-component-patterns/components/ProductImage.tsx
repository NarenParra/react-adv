import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";

export const ProductImage = ({
  img = "",
  className,
  style,
}: {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { product } = useContext(ProductContext);
  let ImgToShow: string = product.img ? product.img : img;

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={ImgToShow ? ImgToShow : noImage}
      alt="Product Img"
    />
  );
};
