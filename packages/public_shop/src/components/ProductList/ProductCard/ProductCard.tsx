import React from 'react';
import { ProductInfo } from '@/models/product.models';
import {
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { truncate } from '../../../utils';
import styles from './ProductCard.module.scss';
import { Filters } from '../../../models/filter.models';
import { useDispatch } from 'react-redux';

const ProductCard = (element: { product: ProductInfo }) => {
  const { id, title, category, price, image } = element.product;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProductClick = async (id: number) => {
    let defaultPayload: Filters = {      
      price: null,
      rating: null,
      reviews: null
  }
    dispatch({ type: 'SET_ACTIVE_FILTER', payload: defaultPayload });
    navigate(`/product/${id}`);
  };

  return (
    <Col className={styles.wrapper} xs={12} md={6} lg={3}>
      <Card className={styles.card} key={id}>
        <img className={styles.image} alt="ProductIMG" src={image} />
        <CardBody className={styles.body}>
          <CardTitle className={styles.title} tag="h5">
            {truncate(title, 40)}
          </CardTitle>

          <CardText className={styles.category}>{category.toUpperCase()}</CardText>
          <footer className={styles.cardFooter}>
            <Button
              className={styles.button}
              color="success"
              outline
              onClick={() => handleProductClick(id)}
            >
              Buy
            </Button>
            <CardSubtitle className={styles.subtitle} tag="h6">
              {price.toFixed(2)} <small>EUR</small>
            </CardSubtitle>
          </footer>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductCard;
