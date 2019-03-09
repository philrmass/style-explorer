import React from 'react';
import Button from './Button';
import styles from './SourceLoadForm.css';

class SourceLoadForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.sourceLoadForm}>
        <div>Load an image or website</div>
        <form className={styles.form}>
          <span className={styles.inputLabel}>
            Local File
          </span>
          <label htmlFor='input'>
            <span className={styles.input}>
              File Name Here
            </span>
            <input id='input' type='file'/>
          </label>
          <Button>
            Load
          </Button>
          <label htmlFor='urlInput'>
            <span className={styles.inputLabel}>
              URL
            </span>
          </label>
          <input id='urlInput' type='text' className={styles.input}/>
          <Button>
            Load
          </Button>
        </form>
      </div>
    );
  }
}

export default SourceLoadForm;
