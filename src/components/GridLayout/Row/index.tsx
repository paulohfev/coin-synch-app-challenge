import React from 'react';
import classNames from 'classnames';
import styles from './Row.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
}

const Row: React.FC<Props> = ({ className, children }) => {
  return <div className={classNames(className, styles.row)}>{children}</div>;
};

export default Row;
