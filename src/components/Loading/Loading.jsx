import React from "react";
import styles from "./loading.module.css";
const Loading = () => {
  return (
    <div>
      {" "}
      <div className={styles.loading__container}>
        <div className={styles.line__container}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
