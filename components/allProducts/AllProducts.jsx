import React, { useEffect } from "react";
import { useState } from "react";
import { fetchProducts } from "../../services/HTTPClient";
import ActionAreaCard from "../bestProducts/cards/Cards";
import Link from "next/link";
import { textGenerator } from "../../helper/helper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// export default function AllProducts() {
//   const [allProducts, setAllProducts] = useState([]);

//   useEffect(() => {
//     const getAllProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setAllProducts(data);
//       } catch (error) {
//         console.log("get all products error", error);
//       }
//     };
//     getAllProducts();
//   }, []);

//   return (
//     <>
//       {allProducts &&
//         allProducts.map((product) => (
//           <>
//             <Link href={`/products/${product.id.toString()}`}>
//               <div key={product.id} className="best_products_items">
//                 <ActionAreaCard
//                   img={product.image}
//                   title={textGenerator(product.title)}
//                   price={product.price}
//                   rate={product.rating.rate}
//                 />
//               </div>
//             </Link>
//           </>
//         ))}
//     </>
//   );
// }

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  console.log("all products", allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts =
    allProducts && allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(
    allProducts && allProducts.length / productsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      {
        <>
          <div className="showing_products">
            {currentProducts &&
              currentProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id.toString()}`}
                >
                  <div className="best_products_items">
                    <ActionAreaCard
                      img={product.image}
                      title={textGenerator(product.title)}
                      price={product.price}
                      rate={product.rating.rate}
                    />
                  </div>
                </Link>
              ))}
          </div>

          <div className="pagination">
            <Stack
              spacing={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Stack>
          </div>
        </>
      }
    </>
  );
}
