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

const ProductCard = (element: { product: ProductInfo }) => {
  const { id, title, category, price, image } = element.product;

  const navigate = useNavigate();

  const handleProductClick = async (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <Col className={styles.wrapper} xs={4} md={4} lg={3}>
      <Card className={styles.card} key={id}>
        <img className={styles.image} alt="ProductIMG" src={image} />
        <CardBody className={styles.body}>
          <CardTitle className={styles.title} tag="h5">
            {truncate(title, 40)}
          </CardTitle>

          <CardText className={styles.text}>{category}</CardText>
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
