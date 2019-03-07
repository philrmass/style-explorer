import React from 'react';
import SourceList from './SourceList';
import SourceLoadForm from './SourceLoadForm';
import styles from './Sources.css';

function Sources() {
  return (
    <div className={styles.sources}>
      <SourceList/>
      <SourceLoadForm/>
    </div>
  );
}

export default Sources;
