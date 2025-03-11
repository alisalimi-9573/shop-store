import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProducts } from "../../services/HTTPClient";
import ActionAreaCard from "./cards/Cards";
import { bestSelling, textGenerator } from "../../helper/helper";

export default function BestProducts() {
  const [bestProducts, setBestProducts] = useState([]);
  console.log("best pdoducts", bestProducts);

  useEffect(() => {
    const getBestProducts = async () => {
      try {
        const data = await fetchProducts();
        setBestProducts(data);
      } catch (error) {
        console.log("getBestProducts", error);
      }
    };

    getBestProducts();
  }, []);

  return (
    <>
      <div className="best_products">
        {bestSelling(bestProducts).map((product) => (
          <>
            <Link href={`/products/${product.id.toString()}`}>
              <div key={product.id} className="best_products_items">
                <ActionAreaCard
                  img={product.image}
                  title={textGenerator(product.title)}
                  price={product.price}
                  rate={product.rating.rate}
                />
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
