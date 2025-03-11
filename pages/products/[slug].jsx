import { fetchProducts, fetchProductById } from "../../services/HTTPClient";
import Nvabar from "@/components/nav/Nvabar";
import BreadCrumbs from "@/components/breadCrumbs/BreadCrumbs";
import BestProducts from "@/components/bestProducts/BestProducts";
import SectionHeader from "@/components/headerContent/SectionHeader";
import Footer from "@/components/footer/Footer";
import Button from "@/components/button/Button";
import { Container } from "@mui/material";
import { useState } from "react";

const size = ["XS", "S", "M", "L", "XL"];

export async function getStaticPaths() {
  const products = await fetchProducts();
  const paths = products.map((product) => ({
    params: { slug: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await fetchProductById(params.slug);
  const index = params.slug - 1;

  if (!product || product.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: product[index],
    },
  };
}

export default function Products({ product }) {
  const sizeList = size.map((size) => {
    return <div className="size_list">{size}</div>;
  });

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  // بخاطر مشکل داشتن api مجبور شدم ادامه پروژه رو با localStorage پیش ببرم
  function handleAddToCard() {
    const cards = {
      productId: product.id,
      quantity: count,
    };
    localStorage.setItem("cards", JSON.stringify(cards));
  }

  return (
    <>
      <Container>
        <Nvabar />
        <BreadCrumbs product={product} />
        <section className="products">
          <div className="product_img">
            <div className="product_img_container">
              <img className="img" src={product.image} alt={product.title} />
            </div>
          </div>
          <div className="product_detail">
            <div className="product_datail_container">
              <div className="product_detail_info">
                <h2>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
              </div>
              <div className="product_detail_order">
                <div className="size">
                  <span>Size :</span>
                  {sizeList}
                </div>
                <div className="order">
                  <div className="counter-box">
                    <button className="decrement" onClick={decrement}>
                      -
                    </button>
                    <div className="count">{count}</div>
                    <button className="increment" onClick={increment}>
                      +
                    </button>
                  </div>
                  <Button onClick={handleAddToCard} btnText="Add To Card" />
                </div>
              </div>
              <div className="product_detail_delivery">
                <div className="delivery">
                  <h2>free delivery</h2>
                  <p>Enter your postal code delivery availability</p>
                </div>
                <div className="delivery">
                  <h2>return delivery</h2>
                  <p>free 30 days delivery returns details</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SectionHeader name="Related item" />
        <BestProducts />
        <Footer />
      </Container>
    </>
  );
}
