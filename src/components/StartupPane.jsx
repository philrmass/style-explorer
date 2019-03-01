import React from 'react';
import SourceLoadForm from './SourceLoadForm';
import styles from './StartupPane.css';

function StartupPane() {
  return (
    <div className={styles.startupPane}>
      <SourceLoadForm />
    </div>
  );
}

export default StartupPane;
