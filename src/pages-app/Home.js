import React from "react";
import Header from "./partials/Header";
import Hero from "./home/Hero";
import Avantages from "./home/Avantages";
import ProductsList from "./home/ProductsList";
import Trio from "./home/Trio";
import AvantagesTrio from "./home/AvantagesTrio";
import AboutUs from "./home/AboutUs";
import Footer from "./partials/Footer";

const Home = () => {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <Avantages />
        <ProductsList />
        <Trio />
        <AvantagesTrio />
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
