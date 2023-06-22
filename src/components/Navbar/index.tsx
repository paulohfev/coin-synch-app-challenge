import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import GridContainer from '@/components/GridLayout/GridContainer';
import Row from '@/components/GridLayout/Row';
import Column from '@/components/GridLayout/Column';
import CoinSynchLogo from '../../../assets/images/coin-synch-logo.svg';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <header className={styles.header}>
      <GridContainer>
        <Row>
          <Column sm={4} md={4} lg={4}>
            <nav className={styles.navigation}>
              <Image
                alt="CoinSynch Logo"
                className={styles.logo}
                priority
                src={CoinSynchLogo}
              />

              <Link className={styles['nav-link']} href="#">
                About us
              </Link>

              <Link className={styles['nav-link']} href="#">
                Top Cryptos
              </Link>
            </nav>          
          </Column>

          <Column sm={4} md={2} lg={2}>
            <div className={styles['actions-wrapper']}>
              <span className={styles['signin-text']}>Sign In</span>

              <div className={styles['button-wrapper']}>
                <Button onClick={() => ''} text="Sign up" />
              </div>
            </div>
          </Column>
        </Row>
      </GridContainer>
    </header>
  );
};

export default Navbar;
