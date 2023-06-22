import React from 'react';
import Image from 'next/image';
import Button, { ButtonSize } from '@/components/Button';
import Column from '@/components/GridLayout/Column';
import GridContainer from '@/components/GridLayout/GridContainer';
import Row from '@/components/GridLayout/Row';
import CryptoBitcoinIcon from '../../../../assets/icons/crypto-bitcoin.svg';
import CryptoCycleIcon from '../../../../assets/icons/crypto-cycle.svg';
import BusinessChartIcon from '../../../../assets/icons/business-chart.svg';
import LaptopMobileIcon from '../../../../assets/icons/laptop-mobile.svg';
import styles from './AboutUsSection.module.scss';

const AboutUsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <GridContainer>
        <Row className={styles.row}>
          <Column className={styles['services-column']} sm={4} md={8} lg={7}>
            <div className={styles['service-card-row']}>
              <div className={styles['service-card']}>
                <Image alt="Crypto Bitcoin Icon" src={CryptoBitcoinIcon} />
                <p className={styles['service-card-label']}>For your company</p>
                <h4 className={styles['service-card-title']}>Crypto Solutions</h4>
                <p className={styles['service-card-paragraph']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
              </div>

              <div className={styles['service-card']}>
                <Image alt="Crypto Bitcoin Icon" src={CryptoCycleIcon} />
                <p className={styles['service-card-label']}>For your company</p>
                <h4 className={styles['service-card-title']}>Crypto Solutions</h4>
                <p className={styles['service-card-paragraph']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
              </div>
            </div>

            <div className={styles['service-card-row']}>
              <div className={styles['service-card']}>
                <Image alt="Crypto Bitcoin Icon" src={BusinessChartIcon} />
                <p className={styles['service-card-label']}>For your company</p>
                <h4 className={styles['service-card-title']}>Crypto Solutions</h4>
                <p className={styles['service-card-paragraph']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
              </div>

              <div className={styles['service-card']}>
                <Image alt="Crypto Bitcoin Icon" src={LaptopMobileIcon} />
                <p className={styles['service-card-label']}>For your company</p>
                <h4 className={styles['service-card-title']}>Crypto Solutions</h4>
                <p className={styles['service-card-paragraph']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
              </div>
            </div>
          </Column>

          <Column className={styles['text-column']} sm={4} md={6} lg={4}>
            <p className={styles['section-label']}>Lorem ipsum</p>
            <h2 className={styles['section-title']}>Lorem ipsum</h2>
            <p className={styles['section-paragraph']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
              lectus magna fringilla urna, porttitor
            </p>

            <div className={styles['button-wrapper']}>
              <Button onClick={() => ''} size={ButtonSize.medium} text="Sign up now" />
            </div>
          </Column>
        </Row>
      </GridContainer>
    </section>
  );
};

export default AboutUsSection;
