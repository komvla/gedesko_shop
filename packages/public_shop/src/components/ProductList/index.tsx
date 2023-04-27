import React, { useState, useEffect } from 'react';
import { getAllProducts, getProductsByCategory } from '../../api';
import { ProductInfo } from '../../models/product.models';
import { Filters } from '../../models/filter.models';
import { Container, Row } from 'reactstrap';
import Card from './ProductCard/ProductCard';
import LoaderBox from '../LoaderBox/LoaderBox';
import ErrorBox from '../ErrorBox/ErrorBox';
import { useSelector } from 'react-redux';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductInfo[] >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const selectedCategory = useSelector((state: {selectedCategory: string}) => state.selectedCategory);
  const currentFilter = useSelector((state: {sortBy: Filters}) => state.sortBy);


  useEffect(() => {
    fetchProducts(selectedCategory ? selectedCategory : 'all');
  }, []);

  useEffect(()=>{
    fetchProducts(selectedCategory);
  }, [selectedCategory])

  
  useEffect(() => {
    handleFilters(findActiveFilter(currentFilter))
  }, [currentFilter])

  function handleFilters (activeFilter : string | null) {
    console.log(currentFilter, activeFilter);
    if( activeFilter === 'price'){
      let sorted =  [...products].sort((a, b) => a.price - b.price)

      currentFilter.price === 'DESC' ? setProducts(sorted) : setProducts(sorted.reverse()) 
    }
    else if( activeFilter === 'rating'){
      let sorted =  [...products].sort((a, b) => a.rating.rate - b.rating.rate)

      currentFilter.rating === 'DESC' ? setProducts(sorted) : setProducts(sorted.reverse()) 
    }
    else if( activeFilter === 'reviews'){
      let sorted =  [...products].sort((a, b) => a.rating.count - b.rating.count)

      currentFilter.reviews === 'DESC' ? setProducts(sorted) : setProducts(sorted.reverse()) 
    }
    else {
      fetchProducts(selectedCategory ? selectedCategory : 'all');
    }

  }
  


  function findActiveFilter(filters: Filters | any): string | null {
    for (const filterName in filters) {
      if (filters[filterName] !== null) {
        return filterName;
      }
    }
    return null;
  }

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
