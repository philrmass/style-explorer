import React from 'react';
import Button from './Button';
import styles from './SourceLoadForm.css';

class SourceLoadForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleFileClick = this.handleFileClick.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFileDrop = this.handleFileDrop.bind(this);
    //this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleUrlChange(event) {
    event.preventDefault();
    console.log('url change', event.target.value);
  }

  handleFileClick(event) {
    event.preventDefault();
    this.fileInput.current.click();
  }

  handleFileChange(event) {
    event.preventDefault();
    this.handleFile(this.fileInput.current.files[0]);
  }

  doNothing(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  handleFileDrop(event) {
    event.stopPropagation();
    event.preventDefault();
    this.handleFile(event.dataTransfer.files[0]);
  }

  handleFile(file) {
    console.log('handle file', file);
  }

  render() {
    return (
      <div 
        className={styles.sourceLoadForm}
        onDragEnter={this.doNothing}
        onDragOver={this.doNothing}
        onDrop={this.handleFileDrop}>
        <div>Load an image or website</div>
        <div>
          <form onSubmit={this.handleUrlSubmit}>
            <input type='text' onChange={this.handleUrlChange}/>
            <span className={styles.leftSpace}>
              <Button>
                Load
              </Button>
            </span>
          </form>
        </div>
        <div>
          <Button onClick={this.handleFileClick}>
            Click
          </Button>
          <span className={styles.leftSpace}>or drop a file here</span>
          <input type='file' ref={this.fileInput} onChange={this.handleFileChange}/>
        </div>
      </div>
    );
  }
}

export default SourceLoadForm;
