import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Found nothing.
      </h1>
      <p className={styles.description}>
        Unfortunately this page is not available in our online store.
      </p>
    </div>
  );
};
