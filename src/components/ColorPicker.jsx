import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setColorHex } from '../actions';
import CopyIcon from './CopyIcon';
import Clipboard from '../clipboard';
import styles from './ColorPicker.css';

function ColorPicker({ dispatch, color }) {
  const style = { backgroundColor: '#' + color.hex };
  return (
    <div 
      className={styles.colorPicker}
      style={style}
      onClick={() => dispatch(setColorHex('6b2097'))}>
      <div 
        className={styles.hslaBar}
        style={style}>
        <span id='hslaText'>
          {`hsla(${color.hue}, ${color.sat}%, ${color.light}%, 1)`}
        </span>
        <button onClick={() => Clipboard.copyTextFromId('hslaText')}>
          <CopyIcon/>
        </button>
      </div>
      <div className={styles.hueSatBox}>
        <div className={styles.lightBox}>
        </div>
      </div>
    </div>
  );
}

ColorPicker.propTypes = {
  dispatch: PropTypes.func,
  color: PropTypes.object
};

function mapStateToProps(state) {
  return { color: state.currentColor };
}

export default connect(mapStateToProps)(ColorPicker);
