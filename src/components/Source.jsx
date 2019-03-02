import React from 'react';
import Magnifier from './Magnifier';
import styles from './Source.css';
import source from '../assets/images/sourceSample0.jpg';

function Source() {
  return (
    <div className={styles.source}>
      <img className={styles.image} src={source}/>
      <Magnifier />
    </div>
  );
}

export default Source;
