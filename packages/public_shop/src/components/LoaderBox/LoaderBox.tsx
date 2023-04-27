import React from 'react';
import { Spinner } from 'reactstrap';
import styles from './LoaderBox.module.scss';

const LoaderBox: React.FC<{ text: string | null }> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <Spinner color="success"></Spinner>
      <p  className={styles.text}>{text}</p>
    </div>
  );
};

export default LoaderBox;
