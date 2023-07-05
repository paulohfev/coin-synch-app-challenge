import React from 'react';
import classNames from 'classnames';
import styles from './Column.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
  lg: number;
  md: number;
  sm: number;
}

const Column: React.FC<Props> = ({ className, children, lg, md, sm }) => {
  return (
    <div className={classNames(className, styles[`column-sm-${sm}`], styles[`column-md-${md}`], styles[`column-lg-${lg}`])}>
      {children}
    </div>
  );
};

export default Column;