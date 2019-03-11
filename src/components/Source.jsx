import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Source.css';

const MAG_WIDTH = 200;
const MAG_HEIGHT = 100;

class Source extends React.Component {
  constructor(props) {
    super(props);
    this.sampleCanvas = React.createRef();
    this.magCanvas = React.createRef();
  }

  renderSampleCanvas(url) {
    let canvas = this.sampleCanvas.current;
    let ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = url;
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    image.style.display = 'none';
  }

  getSnapshotBeforeUpdate(prevProps) {
    if(prevProps.url !== this.props.url) {
      this.renderSampleCanvas(this.props.url);
    }
  }

  render() {
    return (
      <div>
        {this.props.url && <div className={styles.source}>
          <div>
            <canvas 
              id='magCanvas' 
              ref={this.magCanvas}
              width={MAG_WIDTH + 'px'}
              height={MAG_HEIGHT + 'px'}
              className={styles.magCanvas}>
            </canvas>
          </div>
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
