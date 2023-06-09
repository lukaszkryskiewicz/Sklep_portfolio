import React from 'react';
import { useSelector } from 'react-redux';
import { getPromotion } from '../../../redux/promotionRedux';
import styles from './PromotionBox.module.scss';
import clsx from 'clsx';
import { HashLink as NavLink } from 'react-router-hash-link';

const PromotionBox = () => {
  const promo = useSelector(state => getPromotion(state));

  return (
    <div className={clsx('container', styles.root)}>
      <div className='row'>
        <div className={clsx('col-12 col-md-6 mb-4', styles.height)}>
          <NavLink to='/shop/tennis#top'>
            <div className={clsx(styles.box, styles.first)}>
              <div className={styles.shadow}>
                <div className={styles.content}>
                  <h4>{promo.firstTitle}</h4>
                  <h1>
                    <strong>{promo.firstTitleStrong}</strong>
                  </h1>
                  <div className={styles.discount}>
                    <h2>{promo.firstDiscountBox}</h2>
                  </div>
                </div>
              </div>
              <img src={promo.firstImage} alt={promo.firstAltName} />
            </div>
          </NavLink>
        </div>
        <div className={clsx('col-12 col-md-6 mb-4', styles.height)}>
          <NavLink to='/shop/badminton#top'>
            <div className={clsx('col', styles.box, styles.second)}>
              <div className={styles.content}>
                <h5>
                  <strong>{promo.secondTitleStrong}</strong>
                </h5>
                <h6>{promo.secondSubtitle}</h6>
                <h5 className={styles.color}>
                  <strong>{promo.secondPrice}</strong>
                </h5>
              </div>
              <img src={promo.secondImage} alt={promo.secondAltName} />
            </div>
          </NavLink>
          <NavLink to='/shop/squash#top'>
            <div className={clsx('col', styles.box, styles.third)}>
              <div className={styles.content}>
                <h6>
                  <strong className={styles.color}>{promo.thirdTitleStrong}</strong>{' '}
                  {promo.thirdTitle}
                </h6>
                <p>{promo.thirdSubtitle}</p>
              </div>
              <img src={promo.thirdImage} alt={promo.thirdAltName} />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PromotionBox;
