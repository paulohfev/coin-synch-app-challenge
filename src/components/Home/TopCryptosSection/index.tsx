import React from 'react';
import Column from '@/components/GridLayout/Column';
import GridContainer from '@/components/GridLayout/GridContainer';

const TopCryptosSection: React.FC = () => {
  return (
    <section>
      <GridContainer>
        <Column sm={4} md={8} lg={12}>
          <h2>Top Cryptos</h2>
        </Column>
      </GridContainer>
    </section>
  );
};

export default TopCryptosSection;
