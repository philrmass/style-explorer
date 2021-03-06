import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCursorPosition, setFullSize, setDisplaySize, setColorRgb } from '../actions';
import styles from './Source.css';

const MAG_PIXEL_SIZE = 10;

class Source extends React.Component {
  constructor(props) {
    super(props);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleMagClick = this.handleMagClick.bind(this);
    this.magCanvas = React.createRef();
    this.displayImage = React.createRef();
    this.fullCanvas = React.createRef();
  }

  componentDidMount() {
    window.onresize = () => {
      this.imageResize();
    };
  }

  getSnapshotBeforeUpdate(prevProps) {
    this.renderSample(prevProps.url, this.props.url)
      .then((fullCanvas) => {
        this.renderMagnifier(fullCanvas, this.props.mag);
      });
  }

  imageResize() {
    const displayImage = this.displayImage.current;
    if(displayImage) {
      this.props.dispatch(setDisplaySize(displayImage.width, displayImage.height));
    }
  }

  renderSample(lastUrl, url) {
    return new Promise((resolve) => {
      if(lastUrl !== url) {
        let fullCanvas = this.fullCanvas.current;
        let ctx = fullCanvas.getContext('2d');
        const fullImage = new Image();
        fullImage.onload = () => { 
          fullCanvas.width = fullImage.width;
          fullCanvas.height = fullImage.height;
          this.props.dispatch(setFullSize(fullCanvas.width, fullCanvas.height));
          this.props.dispatch(setCursorPosition(0, 0));
          ctx.drawImage(fullImage, 0, 0);
          fullImage.style.display = 'none';
          this.imageResize();
          resolve(fullCanvas);
        };
        fullImage.src = url;
      } else {
        resolve(this.fullCanvas.current);
      }
    });
  }

  renderMagnifier(fullCanvas, mag) {
    let magCanvas = this.magCanvas.current;
    let ctx = magCanvas.getContext('2d');
    ctx.clearRect(0, 0, magCanvas.width, magCanvas.height);
    ctx.imageSmoothingEnabled = false;
    if(fullCanvas.width && fullCanvas.height) {
      ctx.drawImage(fullCanvas, 
        mag.x, mag.y, mag.width, mag.height, 
        0, 0, MAG_PIXEL_SIZE * mag.width, MAG_PIXEL_SIZE * mag.height); 
    }
  }

  handleImageClick(event) {
    let wrap = event.target && event.target.closest('#displayWrap');
    const rect = wrap.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    this.props.dispatch(setCursorPosition(x, y));
  }

  handleMagClick(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const ctx = event.target.getContext('2d');
    var pixel = ctx.getImageData(x, y, 1, 1);
    this.props.dispatch(setColorRgb(pixel.data[0], pixel.data[1], pixel.data[2]));
  }

  render() {
    const mag = this.props.mag;
    const cursorStyle = {
      left: mag.cursorX + 'px', 
      top: mag.cursorY + 'px', 
      width: mag.cursorWidth + 'px',
      height: mag.cursorHeight + 'px'
    };
    return (
      <div>
        <div>
          <div className={styles.magLabel}>
            {`(${mag.x}, ${mag.y}) to (${mag.x + mag.width}, ${mag.y + mag.height})`}
          </div>
          <div className={styles.magWrap}>
            <canvas 
              id='magCanvas' 
              ref={this.magCanvas}
              width={(MAG_PIXEL_SIZE * mag.width) + 'px'}
              height={(MAG_PIXEL_SIZE * mag.height) + 'px'}
              onClick={this.handleMagClick}
              className={styles.magCanvas}>
            </canvas>
          </div>
        </div>
        {this.props.url && <div className={styles.source}>
          <div 
            id='displayWrap' 
            className={styles.displayWrap} 
            onClick={this.handleImageClick}>
            <img 
              id='displayImage'
              ref={this.displayImage}
              src={this.props.url}
              className={styles.displayImage}/>
            <div 
              style={cursorStyle}
              className={styles.magCursor}></div>
          </div>
        </div>}
        <canvas 
          id='fullCanvas' 
          ref={this.fullCanvas}
          className={styles.fullCanvas}>
        </canvas>
      </div>
    );
  }
}

Source.propTypes = {
  dispatch: PropTypes.func,
  url: PropTypes.string,
  mag: PropTypes.object
};

function mapStateToProps(state) {
  return { 
    url: state.currentSource,
    mag: state.magnifier,
  };
}

export default connect(mapStateToProps)(Source);
