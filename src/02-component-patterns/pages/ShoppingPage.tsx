import { ProductCard } from "../components/ProductCard";

const product = {
  id: "1",
  title: "title",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>hoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} />
      </div>
    </div>
  );
};
