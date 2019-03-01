import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.css';

function Icon({source}) {
  return (
    <div className={styles.icon}>
      <img src={source} />
    </div>
  );
}

Icon.propTypes = {
  source: PropTypes.string
};

export default Icon;
