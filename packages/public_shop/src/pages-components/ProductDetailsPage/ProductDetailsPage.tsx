import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap'
import { ProductInfo } from '../../models/product.models';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getProduct } from '../../api';
import ProductDetailsBox from '../../components/ProductDetailsBox/ProductDetailsBox';
import LoaderBox from '../../components/LoaderBox/LoaderBox';
import ErrorBox from '../../components/ErrorBox/ErrorBox';

const ProductDetailsPage = () => {
  const [product, setProduct] = useState<ProductInfo>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const { id } = useParams();

  useEffect(() => {
    fetchProductInfo(id);
  }, [id])


  const fetchProductInfo = async (id: string | undefined ) => {
    setIsLoading(true);
    try {
      await fetch(getProduct(id))
      .then(res=>res.json())
      .then(json=>setProduct(json))

    } catch (error) {
      setError('Error fetching product');
    } finally {
      setIsLoading(false)
    }
  };
  

  return (
    <>
    <Header/>
    <Container>
    {isLoading ? (
        <LoaderBox text={"Loading product information"} />
      ) : error ? (
        <ErrorBox text={error} />
      ) : (
        product && <ProductDetailsBox product={product} />        
      )}      
    </Container>
    <Footer />    
    </>
  );
};

export default ProductDetailsPage;
