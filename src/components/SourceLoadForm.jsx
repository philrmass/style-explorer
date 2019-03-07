import React from 'react';
import Button from './Button';
import styles from './SourceLoadForm.css';

function SourceLoadForm() {
  return (
    <div className={styles.sourceLoadForm}>
      <span>SourceLoadForm</span>
      <div>
        <Button>
          Load
        </Button>
      </div>
    </div>
  );
}

export default SourceLoadForm;
