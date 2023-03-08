import React from 'react';
import styles from './NotFound.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>:(</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.desc}>
        К сожалению данная страница отсутсвует в нашем интернет-магазине
      </p>
    </div>
  );
};
export default NotFoundBlock;
