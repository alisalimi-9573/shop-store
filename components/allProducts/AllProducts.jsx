import React, { useEffect } from "react";
import { useState } from "react";
import { fetchProducts } from "../../services/HTTPClient";
import ActionAreaCard from "../bestProducts/cards/Cards";
import Link from "next/link";
import { textGenerator } from "../../helper/helper";

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const data = await fetchProducts();
        setAllProducts(data);
      } catch (error) {
        console.log("get all products error", error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <>
      {allProducts &&
        allProducts.map((product) => (
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
    </>
  );
}
