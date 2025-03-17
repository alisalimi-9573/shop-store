import React from "react";
import Nvabar from "@/components/nav/Nvabar";
import BreadCrumbs from "@/components/breadCrumbs/BreadCrumbs";
import { Container } from "@mui/material";
import { useContext } from "react";
import { userContext } from "../contexts/UserContext";

export default function Carts() {
  const { state } = useContext(userContext);
  const { carts = [] } = state || {};
  const buyingProducts = carts?.[0]?.products || [];
  console.log("buyingProducts in carts page", buyingProducts);

  function calculateTotalPrice() {
    const totalPrice = buyingProducts.map((total) => {
      console.log("total", total);
      return total.product.price * total.quantity;
    });
    const sum = totalPrice.reduce((accumulator, currentValue) => {
      return accumulator + Math.floor(currentValue);
    }, 0);
    console.log("totalPrice", sum);
    return sum;
  }

  return (
    <>
      <Container>
        <Nvabar />
        <BreadCrumbs />
        <section className="carts">
          {buyingProducts ? (
            buyingProducts.map((items) => (
              <div className="carts_items">
                <p>{items.product.title}</p>
                <p>{items.product.price}$</p>
                <p>{items.quantity}</p>
              </div>
            ))
          ) : (
            <div>
              <p>No Product Buying</p>
            </div>
          )}
        </section>
        <div className="total_price">
          <p className="carts_items">
            Total : <span>{calculateTotalPrice()}$</span>
          </p>
        </div>
      </Container>
    </>
  );
}
