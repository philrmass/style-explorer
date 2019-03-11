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
    if(lastUrl !== url) {
      let canvas = this.sampleCanvas.current;
      let ctx = canvas.getContext('2d');
      const image = new Image();
      image.onload = () => { 
        console.log('img load', image.width, image.height, image.complete);
      };
      image.src = url;
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      image.style.display = 'none';
      console.log('samp', canvas.width, canvas.height, image.complete);
    }
  }

  renderMagnifier(x, y) {
    let canvas = this.magCanvas.current;
    let ctx = canvas.getContext('2d');
    let image = this.sampleCanvas.current;
    ctx.imageSmoothingEnabled = false;
    console.log('mag', x, y, image.width, image.height);
    if(image.width && image.height) {
      ctx.drawImage(image, x, y, MAG_X_PIXELS, MAG_Y_PIXELS, 0, 0, MAG_WIDTH, MAG_HEIGHT); 
    }
  }

  getSnapshotBeforeUpdate(prevProps) {
    this.renderSample(prevProps.url, this.props.url);
    //??? pass in props x, y
    this.renderMagnifier(10, 10);
  }

  render() {
    console.log('render');
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
