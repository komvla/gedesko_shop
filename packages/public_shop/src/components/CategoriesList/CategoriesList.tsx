import React, {useState, useEffect} from 'react';
import styles from './CategoriesList.module.scss';
import { getAllCategories } from '../../api';
import { Container, Row, Col, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

const CategoriesList: React.FC = () => {
  const [categories, setCategories] = useState<String[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<String>('');

  const selectedCategory = useSelector((state: {selectedCategory: string}) => state.selectedCategory);

  const dispatch = useDispatch();


  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      await fetch(getAllCategories())
      .then(res=>res.json())
      .then(json=>setCategories(json))
    } catch (error) {
      setError('Error fetching categories');
    } finally {
      setIsLoading(false)
    }
  };

  function handleCategoryClick(category: String) {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category });
  }


  return (
    <Container className={styles.wrapper}>
      {error ? (
        <div>{error}</div>
      ) : !isLoading ? (
        <Row>
            <Col>
            <Button onClick={() => handleCategoryClick('all')} color={selectedCategory === 'all' ? "success" : ''} active={selectedCategory === 'all'}>ALL</Button>
            </Col>
          {categories?.map((category, id) => (
            <Col key={id}>
            <Button onClick={() => handleCategoryClick(category)} color={selectedCategory === category ? "success" : ''} active={selectedCategory === category}>{(category).toUpperCase()}</Button>
            </Col>
          ))}
        </Row>
      ) : ''}
    </Container>
  )
};

export default CategoriesList;
