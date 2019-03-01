import React from 'react';
import Button from './Button';
import Icon from './Icon';
import blockIcon from '../assets/images/checkMark.svg';
import pickerIcon from '../assets/images/checkMark.svg';
import styles from './ToolBar.css';

function ToolBar() {
  return (
    <div className={styles.toolBar}>
      <span>ToolBar</span>
      <Button>
        <Icon 
          source={pickerIcon} />
      </Button>
      <Button>
        <Icon 
          source={blockIcon} />
      </Button>
    </div>
  );
}

export default ToolBar;
