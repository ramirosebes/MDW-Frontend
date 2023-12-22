import React from 'react';
import styles from './notFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>404</h2>
      <p className={styles.errorMessage}>Not Found</p>
      <p className={styles.paragraph}>The page you are looking for may have been moved, deleted or possibly never existed.</p>
    </div>
  );
};

export default NotFound;