import React from 'react';
import classNames from 'classnames';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import styles from './Column.module.scss';

type Props = {
  children: React.ReactNode;
  lg: number;
  md: number;
  sm: number;
}

const Column: React.FC<Props> = ({ children, lg, md, sm }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={classNames({
      [styles[`column-lg-${lg}`]]: width >= 769,
      [styles[`column-md-${md}`]]: width <= 768,
      [styles[`column-sm-${sm}`]]: width <= 320,
    })}>
      {children}
    </div>
  );
};

export default Column;