import React, { useEffect, useState } from "react";
import Nvabar from "@/components/nav/Nvabar";
import BreadCrumbs from "@/components/breadCrumbs/BreadCrumbs";
import { Container } from "@mui/material";

export default function Carts() {
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
        </section>
      </Container>
    </>
  );
}
