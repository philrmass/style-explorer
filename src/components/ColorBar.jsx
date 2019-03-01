import React from 'react';
import Button from './Button';
import Icon from './Icon';
import copyIcon from '../assets/images/checkMark.svg';
import styles from './ColorBar.css';

function ColorBar() {
  return (
    <div className={styles.colorBar}>
      <span>ColorBar</span>
      <Button>
        <Icon 
          source={copyIcon} />
      </Button>
    </div>
  );
}

export default ColorBar;
