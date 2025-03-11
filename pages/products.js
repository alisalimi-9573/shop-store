import React from "react";
import { Container } from "@mui/material";
import Nvabar from "@/components/nav/Nvabar";
import AllProducts from "@/components/allProducts/AllProducts";

export default function products() {
  return (
    <>
      <section>
        <Container>
          <Nvabar />
          <section>
            <div>fiter & category here</div>
            <section className="all_products">
              <AllProducts />
            </section>
          </section>
        </Container>
      </section>
    </>
  );
}
