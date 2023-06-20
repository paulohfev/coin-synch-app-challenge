import React from 'react';
import styles from './GridContainer.module.scss';

type Props = {
  children: React.ReactNode;
}

const GridContainer: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default GridContainer;
