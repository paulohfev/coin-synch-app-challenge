import React, { useState } from 'react';
import Column from '@/components/GridLayout/Column';
import GridContainer from '@/components/GridLayout/GridContainer';
import Row from '@/components/GridLayout/Row';
import styles from './NewsletterSection.module.scss';
import Button, { ButtonSize } from '@/components/Button';

const NewsletterSection: React.FC = () => {
  const [emailValue, setEmailValue] = useState('');

  return (
    <section className={styles.section}>
      <GridContainer>
        <Row className={styles.row}>
          <Column sm={4} md={4} lg={4}>
            <p className={styles.label}>Lorem ipsum</p>
            <h2 className={styles.title}>Lorem ipsum</h2>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
              lectus magna fringilla urna, porttitor
            </p>
          </Column>

          <Column sm={4} md={4} lg={4}>
            <fieldset className={styles.fieldset}>
              <label className={styles['field-label']}>Email</label>
              <input
                className={styles['email-field']}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="Email"
                value={emailValue}
              />
            </fieldset>

            <Button onClick={() => ''} text="Subscribe" size={ButtonSize.medium} />
          </Column>
        </Row>
      </GridContainer>
    </section>
  );
};

export default NewsletterSection;
