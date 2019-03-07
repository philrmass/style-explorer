import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import CopyIcon from './CopyIcon';
import styles from './ColorBar.css';

function ColorBar({color}) {
  return (
    <div className={styles.colorBar}>
      <div className={styles.colorItem}>
        <span>#{JSON.stringify(color)}</span>
        <Button>
          <CopyIcon/>
        </Button>
      </div>
      <div className={styles.colorItem}>
        <span>rgba(128, 176, 96, 1)</span>
        <Button>
          <CopyIcon/>
        </Button>
      </div>
    </div>
  );
}

ColorBar.propTypes = {
  color: PropTypes.object
};

export default ColorBar;
