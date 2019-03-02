import React from 'react';
import Button from './Button';
import Icon from './Icon';
import copyIcon from '../assets/images/checkMark.svg';
import styles from './ColorBar.css';

function ColorBar() {
  return (
    <div className={styles.colorBar}>
      <div className={styles.colorItems}>
        <div className={styles.colorItem}>
          <Button>
            <Icon 
              source={copyIcon} />
          </Button>
        </div>
        <div className={styles.colorItem}>
          <span>#80b060</span>
          <Button>
            <Icon 
              source={copyIcon} />
          </Button>
        </div>
        <div className={styles.colorItem}>
          <span>rgba(128, 176, 96, 1)</span>
          <Button>
            <Icon 
              source={copyIcon} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ColorBar;
