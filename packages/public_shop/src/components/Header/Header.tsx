import React from 'react';
import styles from './Header.module.scss';
import { FcShop } from 'react-icons/fc'

const Header: React.FC = () => {
  return <header className={styles.header}>
      <FcShop size={50}/>
      <h1>Gedesco Shop</h1>
    
  </header>;
};

export default Header;
