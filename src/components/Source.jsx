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
    this.sampleCanvas = React.createRef();
    this.magCanvas = React.createRef();
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

  getSnapshotBeforeUpdate(prevProps) {
    this.renderSample(prevProps.url, this.props.url)
      .then((image) => {
        //??? pass in props x, y
        this.renderMagnifier(image, 10, 10);
      });
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
          <div className={styles.imageWrapper}>
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
  url: PropTypes.string
};

function mapStateToProps(state) {
  return { url: state.currentSource };
}

export default connect(mapStateToProps)(Source);
