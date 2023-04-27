import React from 'react';
import ProductList from '../../components/ProductList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import FiltersSection from '../../components/FiltersSection/FiltersSection';


const HomePage = () => {
  return (
    <>    
    <Header/>
    <CategoriesList />
    <FiltersSection />
    <ProductList />
    <Footer />
    </>

  );
};

export default HomePage;