import React, { useContext, useEffect } from "react";
import Nvabar from "@/components/nav/Nvabar";
import { Container } from "@mui/material";
import HeaderSlider from "@/components/headerSlider/HeaderSlider";
import SectionHeader from "@/components/headerContent/SectionHeader";
import BestProducts from "@/components/bestProducts/BestProducts";
import HeaderNameBox from "@/components/headerContent/HeaderNameBox";
import Categories from "@/components/categories/Categories";
import ServiceSection from "@/components/serviseSection/ServiceSection";
import Footer from "@/components/footer/Footer";
import { userContext } from "../contexts/UserContext";

export default function Home() {
  const { userData } = useContext(userContext);

  // useEffect(() => {
  //   localStorage.getItem("userId");
  //   console.log("user login data", userData);
  // }, [userData]);
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("userId");
      localStorage.removeItem("carts");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <Container
        style={
          {
            // boxShadow: "5px 5px 13px lightgray",
          }
        }
      >
        <Nvabar />
        <HeaderSlider />
        <SectionHeader
          name="This Month"
          text="Best Selling Products"
          btnText="View All"
        />
        <BestProducts />
        <SectionHeader name="categories" text="Browse By Category">
          <HeaderNameBox />
          <div>{null}</div>
          <div>{null}</div>
        </SectionHeader>
        <Categories />
        <SectionHeader name="Our Products" text="Explore Our Products" />
        <BestProducts />
        <BestProducts />
        <ServiceSection />
        {/* <Footer /> */}
      </Container>
      <Container
        style={{
          padding: "inherit",
        }}
      >
        <Footer />
      </Container>
    </>
  );
}
