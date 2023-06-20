import React from 'react';
import classNames from 'classnames';
import styles from './Column.module.scss';

type Props = {
  children: React.ReactNode;
  lg: number;
}

const Column: React.FC<Props> = ({ children, lg }) => {
  return (
    <div className={classNames({ [styles[`column-lg-${lg}`]]: lg })}>
      {children}
    </div>
  );
};

export default Column;