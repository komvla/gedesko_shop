import React, {useState, useEffect} from 'react';
import styles from './FiltersSection.module.scss';
import { Container, Row, Col, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Filters } from '../../models/filter.models';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const FiltersSection: React.FC = () => {

  const currentFilter = useSelector((state: {sortBy: Filters}) => state.sortBy);

  const dispatch = useDispatch();


  function handleFilterClick(filterName : string) {

    let defaultPayload: Filters = {      
        price: null,
        rating: null,
        reviews: null
    }

    if (filterName === "price"){
        defaultPayload.price = currentFilter.price === 'ASC' ? 'DESC' :  currentFilter.price === null ? 'ASC' : currentFilter.price === 'DESC' ? 'ASC' : null
    }   
    else if (filterName === "rating"){
        defaultPayload.rating = currentFilter.rating === 'ASC' ? 'DESC' :  currentFilter.rating === null ? 'ASC' : currentFilter.rating === 'DESC' ? 'ASC' : null 
    }
    else if (filterName === "reviews"){
        defaultPayload.reviews = currentFilter.reviews === 'ASC' ? 'DESC' :  currentFilter.reviews === null ? 'ASC' : currentFilter.reviews === 'DESC' ? 'ASC' : null
    }
    
    dispatch({ type: 'SET_ACTIVE_FILTER', payload: defaultPayload });
  }


  return (
    <Container className={styles.wrapper}>
        <Row>
            <Col className={styles.title}>
            <p>Sort by : </p>
            </Col>
            <Col>
            <Button active={currentFilter.price !== null} outline color='secondary' onClick={() => handleFilterClick('price')} >
                Price {currentFilter.price === 'ASC' ? <AiOutlineArrowUp /> : currentFilter.price === 'DESC' ? <AiOutlineArrowDown /> : ''}
            </Button>
            </Col>            
            <Col>
            <Button active={currentFilter.rating !== null} outline color='secondary' onClick={() => handleFilterClick('rating')} >
                Rating {currentFilter.rating === 'ASC' ? <AiOutlineArrowUp /> : currentFilter.rating === 'DESC' ? <AiOutlineArrowDown /> : ''}
            </Button> 
            </Col>           
            <Col>
            <Button active={currentFilter.reviews !== null} outline color='secondary' onClick={() => handleFilterClick('reviews')} >
                Reviews {currentFilter.reviews === 'ASC' ? <AiOutlineArrowUp /> : currentFilter.reviews === 'DESC' ? <AiOutlineArrowDown /> : ''}
            </Button>
            </Col>
            <Col>
            <Button outline color='danger' onClick={() => handleFilterClick('cancel')}>
                No Filters
            </Button>
            </Col>
        </Row>
    </Container>
  )
};

export default FiltersSection;
