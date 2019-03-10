import React from 'react';
import Button from './Button';
import styles from './SourceLoadForm.css';

class SourceLoadForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFileClick = this.handleFileClick.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFileDrop = this.handleFileDrop.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    //this.handleFileSubmit = this.handleFileSubmit.bind(this);
    //this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleFileClick(event) {
    event.preventDefault();
    this.fileInput.current.click();
    console.log('file click', this.fileInput.current);
  }

  handleFileChange(event) {
    event.preventDefault();
    console.log('file change', this.fileInput.current.files);
  }

  handleFileDrop(event) {
    event.stopPropagation();
    event.preventDefault();
    console.log('file drop', event.dataTransfer.files);
  }
  /*
  handleChange(event) {
    event.preventDefault();
    console.log('change');
  }

  handleFileSubmit(event) {
    event.preventDefault();
    console.log('submit', this.fileInput.current.files[0]);
  }

  handleUrlSubmit(event) {
    event.preventDefault();
    console.log('submit', this.fileInput);
  }

*/
  render() {
    return (
      <div className={styles.sourceLoadForm}>
        <div 
          style={{backgroundColor: 'red'}}
          onDrop={this.handleFileDrop}
          onDragEnter={(e) => {console.log('enter'); e.stopPropagation(); e.preventDefault();}}
          onDragOver={(e) => {console.log('over'); e.stopPropagation(); e.preventDefault();}}>
          <Button onClick={this.handleFileClick}>
            Click
          </Button>
          <span>or drop a file here</span>
          <input type='file' ref={this.fileInput} onChange={this.handleFileChange}/>
        </div>
      </div>
    );
  }
}
/*
        <input id='input' type='file' ref={this.fileInput}/>
        <div>Load an image or website</div>
        <form className={styles.form} onSubmit={this.handleFileSubmit}>
          <span className={styles.inputLabel}>
            Local File
          </span>
          <label htmlFor='input'>
            <span className={styles.input}>
              File Name Here
            </span>
            <input id='input' type='file' ref={this.fileInput}/>
          </label>
          <Button>
            Load
          </Button>
        </form>
        <form className={styles.form} onSubmit={this.handleUrlSubmit}>
          <label htmlFor='urlInput'>
            <span className={styles.inputLabel}>
              URL
            </span>
          </label>
          <input id='urlInput' type='text' className={styles.input} onChange={this.handleChange}/>
          <Button>
            Load
          </Button>
        </form>
        */

export default SourceLoadForm;
