import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let ImgToShow: string = product.img ? product.img : img;

  return (
    <img
      className={styles.productImg}
      src={ImgToShow ? ImgToShow : noImage}
      alt="Product Img"
    />
  );
};
