import React from 'react';
import SourceList from './SourceList';
import SourceLoadForm from './SourceLoadForm';
import styles from './Sources.css';

function Sources() {
  return (
    <div className={styles.sources}>
      <SourceLoadForm/>
      <SourceList/>
    </div>
  );
}

export default Sources;
