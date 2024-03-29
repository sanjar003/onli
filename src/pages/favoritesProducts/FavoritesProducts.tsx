import React from "react";
import { useGetFavoiteProductsQuery } from "../../redux/api/favoriteProductsApi";

const FavoritesProducts: React.FC = () => {
  const { data: products = [] } = useGetFavoiteProductsQuery();
  return (
    <div>
      {products.map((el: any) => {
        const { productName } = el.product;
        return (
          <div
            style={{
              width: "500px",
              height: "500px",
              background: "green",
              marginTop: "10px",
            }}
          >
            <p> {productName}</p>
          </div>
        );
      })}
    </div>
  );
};
export default FavoritesProducts;
