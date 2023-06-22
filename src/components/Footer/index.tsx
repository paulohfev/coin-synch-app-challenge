import React from 'react';
import Image from 'next/image';
import GridContainer from '../GridLayout/GridContainer';
import CoinSynchLogo from '../../../assets/images/coin-synch-logo.svg';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <GridContainer className={styles.container}>
        <span className={styles.text}>Copyright © 2022 -  All rights reserved</span>

        <Image alt="CoinSynch Logo Footer" height={18} src={CoinSynchLogo} width={94} />
      </GridContainer>
    </footer>
  );
};

export default Footer;
