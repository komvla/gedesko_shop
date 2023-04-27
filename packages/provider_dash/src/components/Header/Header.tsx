import React from "react";
import styles from "./Header.module.scss";
import { FcAutomatic } from "react-icons/fc";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <FcAutomatic size={50} />
      <h1>Gedesco Dashboard</h1>
    </header>
  );
};

export default Header;
