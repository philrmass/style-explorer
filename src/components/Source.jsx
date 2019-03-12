import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCursorPosition, setFullSize, setDisplaySize } from '../actions';
import styles from './Source.css';

const MAG_PIXEL_SIZE = 10;

class Source extends React.Component {
  constructor(props) {
    super(props);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.magCanvas = React.createRef();
    this.displayImage = React.createRef();
    this.fullCanvas = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps) {
    this.renderSample(prevProps.url, this.props.url)
      .then((fullCanvas) => {
        this.renderMagnifier(fullCanvas, this.props.mag);
      });
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
          ctx.drawImage(fullImage, 0, 0);
          fullImage.style.display = 'none';
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
    //???? move below
    const displayImage = this.displayImage.current;
    this.props.dispatch(setDisplaySize(displayImage.width, displayImage.height));
    console.log('  dw,dh', displayImage.width, displayImage.height);
  }

  //??? handle window resize
  //const displayImage = this.displayImage.current;
  //this.props.dispatch(setDisplaySize(displayImage.width, displayImage.height));
  //console.log('  dw,dh', rect.width, rect.height);

  render() {
    const cursorStyle = {
      left: this.props.mag.cursorX + 'px', 
      top: this.props.mag.cursorY + 'px', 
      width: this.props.mag.cursorWidth + 'px',
      height: this.props.mag.cursorHeight + 'px'
    };
    return (
      <div>
        <div>
          <canvas 
            id='magCanvas' 
            ref={this.magCanvas}
            width={(MAG_PIXEL_SIZE * this.props.mag.width) + 'px'}
            height={(MAG_PIXEL_SIZE * this.props.mag.height) + 'px'}
            className={styles.magCanvas}>
          </canvas>
        </div>
        {this.props.url && <div className={styles.source}>
          <div 
            id='displayWrap' 
            className={styles.displayWrap} 
            onClick={this.handleImageClick}>
            <img 
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
