import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setColorHex, setColorHsl } from '../actions';
import CopyIcon from './CopyIcon';
import Clipboard from '../clipboard';
import styles from './ColorPicker.css';

function handleLight(color, event, dispatch) {
  const lightScale = -0.1;
  const light = color.light + (lightScale * event.movementY);
  dispatch(setColorHsl(color.hue, color.sat, light));
}

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
          {`hsla(${color.hue.toFixed(0)}, ${color.sat.toFixed(1)}%, ${color.light.toFixed(1)}%, 1)`}
        </span>
        <button onClick={() => Clipboard.copyTextFromId('hslaText')}>
          <CopyIcon/>
        </button>
      </div>
      <div className={styles.hueSatBox}>
        <div 
          className={styles.lightBox} 
          onMouseMove={(event) => handleLight(color, event, dispatch)}>
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
