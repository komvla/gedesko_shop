import React, { useState, useEffect } from 'react';
import { getAllProducts, getProductsByCategory } from '../../api';
import { ProductInfo } from '../../models/product.models';
import { Container, Row } from 'reactstrap';
import Card from './ProductCard/ProductCard';
import LoaderBox from '../LoaderBox/LoaderBox';
import ErrorBox from '../ErrorBox/ErrorBox';
import { useSelector } from 'react-redux';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const selectedCategory = useSelector((state: {selectedCategory: string}) => state.selectedCategory);


  useEffect(() => {
    fetchProducts(selectedCategory ? selectedCategory : 'all');
  }, []);

  useEffect(()=>{
    fetchProducts(selectedCategory);
  }, [selectedCategory])



  const fetchProducts = async (category: String ) => {
    setIsLoading(true);
    try {
      await fetch(category === 'all' ? getAllProducts() : getProductsByCategory(selectedCategory))
      .then(res=>res.json())
      .then(json=>setProducts(json))

    } catch (error) {
      setError('Error fetching products');
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <Container>
      {isLoading ? (
        <LoaderBox text={selectedCategory !== 'all' ? `Loading ${selectedCategory}` : "Loading products..."} />
      ) : error ? (
        <ErrorBox text={error} />
      ) : (
        <>
        <Row>
          {products?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Row>
        </>
      )}
    </Container>
  );
};

export default ProductList;
