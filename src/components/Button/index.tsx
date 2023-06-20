import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export enum ButtonCategory {
  primary = 'primary',
  tertiary = 'tertiary'
}

export enum ButtonSize {
  small = 'small',
}

type Props = {
  category?: ButtonCategory;
  onClick: () => void;
  size?: ButtonSize;
  text: string;
};

const Button: React.FC<Props> = ({
  category = ButtonCategory.primary,
  onClick,
  size = ButtonSize.small,
  text,
}) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles[`button-${category}`]]: category,
        [styles[`button-${size}`]]: size
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
