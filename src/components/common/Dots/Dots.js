import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dots.module.scss';
import clsx from 'clsx';

const Dots = ({ pagesCount, handlePageChange, activePage }) => {
  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => handlePageChange(i)}
          className={clsx(i === activePage && styles.active)}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={'col-lg-auto col-12 text-center mb-2 ' + styles.dots}>
      <ul>{dots}</ul>
    </div>
  );
};

export default Dots;

Dots.propTypes = {
  pagesCount: PropTypes.number,
  handlePageChange: PropTypes.func,
  activePage: PropTypes.number,
};
