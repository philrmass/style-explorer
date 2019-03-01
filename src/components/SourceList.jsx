import React from 'react';
import SourceItem from './SourceItem';
import styles from './SourceList.css';

function SourceList() {
  return (
    <div className={styles.sourceList}>
      <span>SourceList</span>
      <SourceItem />
      <SourceItem />
      <SourceItem />
    </div>
  );
}

export default SourceList;
