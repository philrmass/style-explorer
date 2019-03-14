import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSource, setSource, setSourceColors } from '../actions';
import Button from './Button';
import styles from './SourceLoadForm.css';
import Color from './../color';

const USE_INITIAL_IMAGE = true;

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

  componentDidMount() {
    if(USE_INITIAL_IMAGE) {
      this.fetchUrlImage('https://i.imgur.com/ipq17o4.png');
      //this.fetchUrlImage('https://i.imgur.com/eoZKY2v.jpg');
    }
  }

  handleUrlChange(event) {
    event.preventDefault();
    this.setState({ inputUrl: event.target.value });
  }

  handleUrlSubmit(event) {
    event.preventDefault();
    this.fetchUrlImage(this.state.inputUrl);
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

  fetchUrlImage(url) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        this.loadImage(url, blob);
      });
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
    let canvas = document.getElementById('loadCanvas');
    let ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    image.style.display = 'none';
    this.props.dispatch(addSource(name, url));
    this.props.dispatch(setSource(url));
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setTimeout(() => {
      const colors = Color.parseColorData(imageData.data);
      this.props.dispatch(setSourceColors(url, colors));
    }, 100);
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
        <canvas id='loadCanvas' className={styles.loadCanvas}></canvas>
      </div>
    );
  }
}

SourceLoadForm.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(SourceLoadForm);
