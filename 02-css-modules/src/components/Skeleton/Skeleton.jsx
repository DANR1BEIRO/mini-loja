// 02-css-modules/src/components/Skeleton/Skeleton.jsx
import React from 'react';
import styles from './Skeleton.module.css';

const Skeleton = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={`${styles.skeleton} ${styles.skeletonImage}`}></div>
      <div className={styles.skeletonContent}>
        <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTextShort}`}></div>
        <div className={styles.skeletonFooter}>
          <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTextPrice}`}></div>
          <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTextRating}`}></div>
        </div>
        <div className={`${styles.skeleton} ${styles.skeletonButton}`}></div>
      </div>
    </div>
  );
};

export default Skeleton;