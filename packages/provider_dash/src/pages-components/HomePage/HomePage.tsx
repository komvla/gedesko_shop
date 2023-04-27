import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import ProductTable from "../../components/ProductsTable/ProductsTable";

const HomePage = () => {
  return (
    <>
      <Header />
      <CategoriesList />
      <ProductTable />
      <Footer />
    </>
  );
};

export default HomePage;
