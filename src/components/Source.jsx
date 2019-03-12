import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Source.css';

const MAG_PIXEL_SIZE = 10;
//??? remove mag sizes
const MAG_X_PIXELS = 20;
const MAG_Y_PIXELS = 10;
const MAG_WIDTH = (MAG_PIXEL_SIZE * MAG_X_PIXELS); 
const MAG_HEIGHT = (MAG_PIXEL_SIZE * MAG_Y_PIXELS); 

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
        this.renderMagnifier(fullCanvas, this.props.magX, this.props.magY);
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
          //??? setFullSize(fullCanvas.width, fullCanvas.height);
          console.log('  fw,fh', fullCanvas.width, fullCanvas.height);
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

  renderMagnifier(fullCanvas, x, y) {
    let magCanvas = this.magCanvas.current;
    let ctx = magCanvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    if(fullCanvas.width && fullCanvas.height) {
      ctx.drawImage(fullCanvas, x, y, MAG_X_PIXELS, MAG_Y_PIXELS, 0, 0, MAG_WIDTH, MAG_HEIGHT); 
    }
  }

  handleImageClick(event) {
    let wrap = event.target && event.target.closest('#displayWrap');
    const rect = wrap.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    //??? setMagnifierPosition(x, y);
    console.log('  x,y', x, y);
    const displayImage = this.displayImage.current;
    console.log('  dw,dh', displayImage.width, displayImage.height);
  }

  //??? handle window resize
  //let rect = this.displayImage.getBoundingClientRect();
  //??? setDisplaySize(rect.width, rect.height);
  //console.log('  dw,dh', rect.width, rect.height);

  render() {
    return (
      <div>
        <div>
          <canvas 
            id='magCanvas' 
            ref={this.magCanvas}
            width={(MAG_WIDTH) + 'px'}
            height={(MAG_HEIGHT) + 'px'}
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
            <div className={styles.magCursor}></div>
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
  url: PropTypes.string,
  magX: PropTypes.number,
  magY: PropTypes.number
};

function mapStateToProps(state) {
  return { 
    url: state.currentSource,
    magX: state.ui.magX,
    magY: state.ui.magY
  };
}

export default connect(mapStateToProps)(Source);
