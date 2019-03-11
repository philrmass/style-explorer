import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Source.css';

const MAG_WIDTH = 200;
const MAG_HEIGHT = 100;

function Source({url}) {
  return (
    <div>
      {url && <div className={styles.source}>
        <div>
          <canvas 
            id='magCanvas' 
            width={MAG_WIDTH + 'px'}
            height={MAG_HEIGHT + 'px'}
            className={styles.magCanvas}>
          </canvas>
        </div>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={url}/>
          <div className={styles.magCursor}></div>
        </div>
      </div>}
      <canvas id='sampleCanvas' className={styles.sampleCanvas}></canvas>
    </div>
  );
}

Source.propTypes = {
  url: PropTypes.string
};

function mapStateToProps(state) {
  return { url: state.currentSource };
}

export default connect(mapStateToProps)(Source);
