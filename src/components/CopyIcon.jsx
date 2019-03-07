import React from 'react';
import PropTypes from 'prop-types';
import styles from './CopyIcon.css';

function CopyIcon({source}) {
  return (
    <div className={styles.copyCopyIcon}>
      <img src={source} />
    </div>
  );
}

CopyIcon.propTypes = {
  source: PropTypes.string
};

export default CopyIcon;
