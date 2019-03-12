import React from 'react';
import PropTypes from 'prop-types';
import styles from './CopyIcon.css';

function CopyIcon() {
  return (
    <div className={styles.copyIcon}>
      <div className={styles.wrap}>
        <div className={styles.front}>
        </div>
        <div className={styles.back}>
        </div>
      </div>
    </div>
  );
}

CopyIcon.propTypes = {
  source: PropTypes.string
};

export default CopyIcon;
