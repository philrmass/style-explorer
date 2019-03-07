import React from 'react';
import BoxGraph from './BoxGraph';
import styles from './Graph.css';

function Graph() {
  return (
    <div className={styles.boxGraph}>
      <BoxGraph/>
    </div>
  );
}

export default Graph;
