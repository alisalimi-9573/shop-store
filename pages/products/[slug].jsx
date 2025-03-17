import { fetchProducts, fetchProductById } from "../../services/HTTPClient";
import Nvabar from "@/components/nav/Nvabar";
import BreadCrumbs from "@/components/breadCrumbs/BreadCrumbs";
import BestProducts from "@/components/bestProducts/BestProducts";
import SectionHeader from "@/components/headerContent/SectionHeader";
import Footer from "@/components/footer/Footer";
import Button from "@/components/button/Button";
import { Container } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../../contexts/UserContext";
import Router from "next/router";
import { useRouter } from "next/navigation";

const size = ["XS", "S", "M", "L", "XL"];

export async function getStaticPaths() {
  const products = await fetchProducts();
  const paths = products.map((product) => ({
    params: { slug: product.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const product = await fetchProductById(params.slug);
    console.log("Fetched product:", product);

    if (!product) {
      return <p>Loading...</p>;
    }
    // if (!product) {
    //   return {
    //     notFound: true,
    //   };
    // }

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error.message);
    return { props: { product: null } };
  }
}

export default function Products({ product }) {
  const { addSelectedItemsToCarts } = useContext(userContext);
  const router = useRouter();
  const sizeList = size.map((size) => {
    return <div className="size_list">{size}</div>;
  });

  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  function generateUniqueId() {
    return Math.random().toString(36).substr(2, 8);
  }

  // function handleAddToCarts() {
  //   const userId = JSON.parse(localStorage.getItem("userId"));
  //   const carts = {
  //     id: generateUniqueId(),
  //     userId: userId,
  //     products: [{ productId: product.id, quantity: count }],
  //   };
  //   addSelectedItemsToCarts(carts);
  // }
  // function handleAddToCarts() {
  //   const userId = JSON.parse(localStorage.getItem("userId"));

  //   if (!!userId) {
  //     const existingCart = JSON.parse(localStorage.getItem("carts")) || [];

  //     let updatedCarts = existingCart;

  //     if (!existingCart.find((cart) => cart.userId === userId)) {
  //       updatedCarts = [
  //         ...existingCart,
  //         {
  //           id: generateUniqueId(),
  //           userId: userId,
  //           products: [{ productId: product.id, quantity: count }],
  //         },
  //       ];
  //     } else {
  //       updatedCarts = existingCart.map((cart) => {
  //         if (cart.userId === userId) {
  //           const existingProductIndex = cart.products.findIndex(
  //             (p) => p.productId === product.id
  //           );
  //           if (existingProductIndex !== -1) {
  //             cart.products[existingProductIndex].quantity += count; //
  //           } else {
  //             cart.products.push({ productId: product.id, quantity: count });
  //           }
  //         }
  //         return cart;
  //       });
  //     }
  //     localStorage.setItem("carts", JSON.stringify(updatedCarts));
  //     router.push("http://localhost:3000/carts");
  //     addSelectedItemsToCarts(updatedCarts);
  //   } else {
  //     router.push("http://localhost:3000/sign-up");
  //   }
  // }

  function handleAddToCarts() {
    const userId = JSON.parse(localStorage.getItem("userId"));

    if (!!userId) {
      const existingCart = JSON.parse(localStorage.getItem("carts")) || [];

      let updatedCarts = existingCart;

      if (!existingCart.find((cart) => cart.userId === userId)) {
        updatedCarts = [
          ...existingCart,
          {
            id: generateUniqueId(),
            userId: userId,
            products: [
              {
                product: product,
                quantity: count,
              },
            ],
          },
        ];
      } else {
        updatedCarts = existingCart.map((cart) => {
          if (cart.userId === userId) {
            cart.products = cart.products || [];
            const existingProductIndex = cart.products.findIndex(
              (p) => p.product && p.product.id === product.id
            );
            if (existingProductIndex !== -1) {
              cart.products[existingProductIndex].quantity += count;
            } else {
              cart.products.push({
                product: product,
                quantity: count,
              });
            }
          }
          return cart;
        });
      }
      localStorage.setItem("carts", JSON.stringify(updatedCarts));
      router.push("http://localhost:3000/carts");
      addSelectedItemsToCarts(updatedCarts);
    } else {
      router.push("http://localhost:3000/sign-up");
    }
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

                  <Button onClick={handleAddToCarts} btnText="Add To Card" />
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
