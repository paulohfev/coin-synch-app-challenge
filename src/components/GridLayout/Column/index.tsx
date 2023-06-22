import React from 'react';
import classNames from 'classnames';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import styles from './Column.module.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
  lg: number;
  md: number;
  sm: number;
}

const Column: React.FC<Props> = ({ className, children, lg, md, sm }) => {
  const { width } = useWindowDimensions();

  return (
    <div className={classNames(className, {
        [styles[`column-lg-${lg}`]]: width > 768,
        [styles[`column-md-${md}`]]: width <= 768,
        [styles[`column-sm-${sm}`]]: width <= 320,
      })}
    >
      {children}
    </div>
  );
};

export default Column;