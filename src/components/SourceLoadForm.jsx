import React from 'react';
import Button from './Button';
import styles from './SourceLoadForm.css';

class SourceLoadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputUrl: '', url: '' };
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
    this.handleFileClick = this.handleFileClick.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFileDrop = this.handleFileDrop.bind(this);
    this.fileInput = React.createRef();
  }

  handleUrlChange(event) {
    event.preventDefault();
    this.setState({ inputUrl: event.target.value });
  }

  handleUrlSubmit(event) {
    event.preventDefault();
    console.log('url submit', this.state.inputUrl);
    const url = this.state.inputUrl;
    fetch(this.state.inputUrl)
      .then(response => response.blob())
      .then(blob => {
        console.log('FETCH_IMAGE', blob, '\nurl', url);
        this.setState({ url: url });
      });
    this.setState({ inputUrl: ''});
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
    const url = window.URL.createObjectURL(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      console.log('LOAD_IMAGE=', file, '\nURL=', url, '\nDATA=', event.target.result);
      this.setState({ url: url });
    };
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div 
        className={styles.sourceLoadForm}
        onDragEnter={this.doNothing}
        onDragOver={this.doNothing}
        onDrop={this.handleFileDrop}>
        <div>Load an image</div>
        <div>
          <form onSubmit={this.handleUrlSubmit}>
            <input type='text' value={this.state.inputUrl} onChange={this.handleUrlChange}/>
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
        <img src={this.state.url}/>
      </div>
    );
  }
}

export default SourceLoadForm;
