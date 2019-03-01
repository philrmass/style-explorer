import React from 'react';
import ColorPicker from './ColorPicker';
import BoxGraph from './BoxGraph';
import styles from './ToolDisplay.css';

function ToolDisplay() {
  return (
    <div className={styles.toolDisplay}>
      <span>ToolDisplay</span>
      <ColorPicker />
      <BoxGraph />
    </div>
  );
}

export default ToolDisplay;
