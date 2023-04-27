import React from 'react';
import ProductList from '../../components/ProductList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CategoriesList from '../../components/CategoriesList/CategoriesList';


const HomePage = () => {
  return (
    <>    
    <Header/>
    <CategoriesList />
    <ProductList />
    <Footer />
    </>

  );
};

export default HomePage;