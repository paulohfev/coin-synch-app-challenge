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

  const getResponsiveStyling = () => {
    if (width > 1024) {
      return styles[`column-lg-${lg}`];
    } else if (width <= 1024 && width >= 800) {
      return styles[`column-md-${md}`];
    } else {
      return styles[`column-sm-${sm}`];
    }
  }

  return (
    <div className={classNames(className, getResponsiveStyling())}>
      {children}
    </div>
  );
};

export default Column;