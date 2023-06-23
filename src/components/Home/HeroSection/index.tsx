import React from 'react';
import Image from 'next/image';
import HorizontalScroll from 'react-scroll-horizontal';
import Button, { ButtonSize } from '@/components/Button';
import Column from '@/components/GridLayout/Column';
import GridContainer from '@/components/GridLayout/GridContainer';
import Row from '@/components/GridLayout/Row';
import ArrowIcon from '../../../../assets/icons/arrow-right.svg';
import CoinSynchWoman from '../../../../assets/images/coin-synch-woman.png';
import CoinSynchMan from '../../../../assets/images/coin-synch-man.png';
import CoinSynchWomanBlackWhite from '../../../../assets/images/coin-synch-woman-black-white.png';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <GridContainer className={styles.container}>
        <Row className={styles.row}>
          <Column sm={4} md={4} lg={5}>
            <h1 className={styles.header}>Lorem ipsum dolor sit amet, consectetur</h1>
            <h5 className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
              lectus magna fringilla urna, porttitor
            </h5>

            <div className={styles['button-wrapper']}>
              <Button
                onClick={() => ''}
                size={ButtonSize.medium}
                text={<span>Sign up now <Image alt="Arrow Icon" src={ArrowIcon} /></span>}
              />
            </div>

            <div className={styles['hero-keywords-list']}>
              <div className={styles['hero-keyword']}>Cryptos</div>
              <div className={styles['hero-keyword']}>NFTs</div>
              <div className={styles['hero-keyword']}>Games</div>
            </div>
          </Column>

          <Column className={styles['carousel-column']} sm={4} md={3} lg={5}>
            <HorizontalScroll reverseScroll>
              <div className={styles['carousel-slide']}>
                <Image alt="CoinSynch" src={CoinSynchWoman} priority width={384} />
              </div>
              <div className={styles['carousel-slide']}>
                <Image alt="CoinSynch" src={CoinSynchMan} priority width={384} />
              </div>
              <div className={styles['carousel-slide']}>
                <Image alt="CoinSynch" src={CoinSynchWomanBlackWhite} priority width={384} />
              </div>
            </HorizontalScroll>
          </Column>
        </Row>
      </GridContainer>

      <div className={styles['hero-footer-banner']} />
    </section>
  );
};

export default HeroSection;
