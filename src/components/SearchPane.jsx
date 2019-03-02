import React from 'react';
import SourceLoadForm from './SourceLoadForm';
import styles from './SearchPane.css';

function SearchPane() {
  return (
    <div className={styles.searchPane}>
      <SourceLoadForm />
    </div>
  );
}

export default SearchPane;
