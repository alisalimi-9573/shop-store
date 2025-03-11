import React, { useEffect, useState } from "react";
import Nvabar from "@/components/nav/Nvabar";
import BreadCrumbs from "@/components/breadCrumbs/BreadCrumbs";
import { fetchProducts } from "../services/HTTPClient";
import { Container } from "@mui/material";

export default function Carts() {
  const [productsById, setProductsById] = useState([]);
  const [quantity, setQuantity] = useState({});
  console.log("fetch cards", productsById);
  console.log("quantity", quantity);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const userCards = JSON.parse(localStorage.getItem("cards"));
        setQuantity(userCards.quantity);
        const allProducts = await fetchProducts();
        console.log("All products fetched:", allProducts);
        const matchProduct = allProducts.filter(
          (product) => product.id === userCards.productId
        );
        if (matchProduct.length > 0) {
          setProductsById(matchProduct);
          console.log("Matchproduct:", matchProduct);
        } else {
          console.warn("No product found");
        }
      } catch (error) {
        console.error("fetch cards error:", error.message);
      }
    };

    fetchProduct();
  }, []);

  return (
    <>
      <Container>
        <Nvabar />
        <BreadCrumbs />
        <section className="carts">
          <div className="carts_items">
            <p>product</p>
            <p>price</p>
            <p>total</p>
          </div>
          {productsById
            ? productsById.map((product) => (
                <div className="carts_items">
                  <p>{product.title}</p>
                  <p>{product.price}$</p>
                  <p>{product.price * quantity}$</p>
                </div>
              ))
            : null}
        </section>
      </Container>
    </>
  );
}
