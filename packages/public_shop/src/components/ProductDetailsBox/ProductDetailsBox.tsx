import React from 'react';
import { ProductInfo } from '@/models/product.models';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import styles from './ProductDetailsBox.module.scss';

const ProductDetailsBox = (element: { product: ProductInfo }) => {
  const navigate = useNavigate();
  const { title, category, price, image, description, rating } = element.product;

  return (
    <Col className={styles.wrapper} lg={12}>
    <Row className={styles.headerActions}>
        <Button  className={styles.button} size='md' onClick={() => navigate('/')} color="success"><span>Go back</span></Button>
    </Row>
      <Card className={styles.card}>
        <div className={styles.cardContent}>
            <Col>
        <img className={styles.image} alt="ProductIMG" src={image} />
            </Col>
            <Col>
        <CardBody className={styles.body}>
          <CardTitle className={styles.title} tag="h5">
            {title}
          </CardTitle>
          <CardText tag={'h6'} className={styles.category}>{category.toUpperCase()}</CardText>
          <CardText tag={'p'} className={styles.description}>{description}</CardText>
          <CardSubtitle className={styles.price} tag="h6">
              {price.toFixed(2)} <small>EUR</small>
           </CardSubtitle>
        </CardBody>            
            </Col>
        </div>

      </Card>
    </Col>
  );
};

export default ProductDetailsBox;
