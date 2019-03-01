import React from 'react';
import Magnifier from './Magnifier';
import styles from './SourceDisplay.css';

function SourceDisplay() {
  return (
    <div className={styles.sourceDisplay}>
      <span>SourceDisplay</span>
      <Magnifier />
    </div>
  );
}

export default SourceDisplay;
