import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import TitleProducts from "./products/TitleProducts";
import ProductsItems from "./products/ProductsItems";

const Products = () => {
  return (
    <div>
      <Header />

      <main>
        <TitleProducts />
        <ProductsItems />
      </main>

      <Footer />
    </div>
  );
};

export default Products;
