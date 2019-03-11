import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Source.css';

const MAG_X_PIXELS = 20;
const MAG_Y_PIXELS = 10;
const MAG_SIZE = 10;
const MAG_WIDTH = (MAG_SIZE * MAG_X_PIXELS); 
const MAG_HEIGHT = (MAG_SIZE * MAG_Y_PIXELS); 

class Source extends React.Component {
  constructor(props) {
    super(props);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.sampleCanvas = React.createRef();
    this.magCanvas = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps) {
    this.renderSample(prevProps.url, this.props.url)
      .then((image) => {
        this.renderMagnifier(image, this.props.magX, this.props.magY);
      });
  }

  renderSample(lastUrl, url) {
    return new Promise((resolve) => {
      if(lastUrl !== url) {
        let canvas = this.sampleCanvas.current;
        let ctx = canvas.getContext('2d');
        const image = new Image();
        image.onload = () => { 
          canvas.width = image.width;
          canvas.height = image.height;
          //??? setFullSize(fw, fh);
          ctx.drawImage(image, 0, 0);
          image.style.display = 'none';
          resolve(canvas);
        };
        image.src = url;
      } else {
        resolve(this.sampleCanvas.current);
      }
    });
  }

  renderMagnifier(image, x, y) {
    let canvas = this.magCanvas.current;
    let ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    if(image.width && image.height) {
      ctx.drawImage(image, x, y, MAG_X_PIXELS, MAG_Y_PIXELS, 0, 0, MAG_WIDTH, MAG_HEIGHT); 
    }
  }

  handleImageClick(event) {
    let wrap = event.target && event.target.closest('#imageWrap');
    let rect = wrap.getBoundingClientRect();
    console.log('DIV');
    console.log('  x,y', event.clientX - rect.left, event.clientY - rect.top);
    console.log('  dw,dh', rect.width, rect.height);
    console.log('  fw,fh', this.sampleCanvas.current.width, this.sampleCanvas.current.height);
    //??? setMagnifierPosition(x, y, dw, dh);
  }

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
            id='imageWrap' 
            className={styles.imageWrap} 
            onClick={this.handleImageClick}>
            <img className={styles.image} src={this.props.url}/>
            <div className={styles.magCursor}></div>
          </div>
        </div>}
        <canvas 
          id='sampleCanvas' 
          ref={this.sampleCanvas}
          className={styles.sampleCanvas}>
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
