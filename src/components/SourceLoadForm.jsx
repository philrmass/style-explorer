import React from 'react';
import Button from './Button';
import styles from './SourceLoadForm.css';

class SourceLoadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputUrl: '' };
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
    const url = this.state.inputUrl;
    fetch(this.state.inputUrl)
      .then(response => response.blob())
      .then(blob => {
        this.loadImage(url, blob);
      });
  }

  handleFileClick(event) {
    event.preventDefault();
    this.fileInput.current.click();
  }

  handleFileChange(event) {
    event.preventDefault();
    const file = this.fileInput.current.files[0];
    this.loadImage(file.name, file);
  }

  doNothing(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  handleFileDrop(event) {
    event.stopPropagation();
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    this.loadImage(file.name, file);
  }

  loadImage(name, fileOrBlob) {
    if(this.isImage(fileOrBlob)) {
      const url = window.URL.createObjectURL(fileOrBlob);
      let image = new Image();
      image.onload = () => {
        this.processImage(name, url, image);
      };
      image.src = url;
    } else {
      console.error('Failed to load image from ' + name);
    }
  }

  isImage(fileOrBlob) {
    return ((typeof(fileOrBlob.type) === 'string') 
      && fileOrBlob.type.startsWith('image'));
  }

  processImage(name, url, image) {
    console.log('PROCESS_IMAGE\nname:', name , '\nurl:', url, '\nsize:', image.width, image.height);
  }

  render() {
    return (
      <div 
        className={styles.sourceLoadForm}
        onDragEnter={this.doNothing}
        onDragOver={this.doNothing}
        onDrop={this.handleFileDrop}>
        <div>Load an image from the web</div>
        <div>
          <form onSubmit={this.handleUrlSubmit}>
            <input 
              type='text' 
              value={this.state.inputUrl} 
              placeholder='Paste URL here'
              onChange={this.handleUrlChange}/>
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
