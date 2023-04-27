import React from "react";
import styles from "./ErrorBox.module.scss";
import { MdOutlineErrorOutline } from "react-icons/md";

const LoaderBox: React.FC<{ text: string | null }> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <MdOutlineErrorOutline color="#198754" />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default LoaderBox;
