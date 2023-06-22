import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store';
import Button from '@/components/Button';
import GridContainer from '@/components/GridLayout/GridContainer';
import Row from '@/components/GridLayout/Row';
import Column from '@/components/GridLayout/Column';
import { fetchCryptoCoinTrades, selectCryptoCoinTrades } from '@/store/slices/cryptoCoins.slice';
import CoinSynchLogo from '../../../assets/images/coin-synch-logo.svg';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCryptoCoinTrades())
  }, [dispatch]);
  const cryptoCoinTrades = useAppSelector(selectCryptoCoinTrades);

  console.log(cryptoCoinTrades)

  return (
    <header className={styles.header}>
      <GridContainer>
        <Row>
          <Column className={styles['nav-column']} sm={4} md={4} lg={4}>
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

          <Column sm={4} md={4} lg={4}>
            <div className={styles.wrapper}>
              <div className={styles.marquee}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat, ante eu bibendum tincidunt, sem lacus vehicula augue, ut suscipit.
                </p>
              </div>
            </div>
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
