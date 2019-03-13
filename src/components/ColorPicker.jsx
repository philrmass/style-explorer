import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setColorHsl } from '../actions';
import CopyIcon from './CopyIcon';
import Clipboard from '../clipboard';
import styles from './ColorPicker.css';

function updateHueSat(color, event, dispatch) {
  if(event.buttons === 1) {
    event.preventDefault();
    const hueScale = 0.1;
    let hue = color.hue + (hueScale * event.movementX);
    hue = (hue < 0) ? (hue + 360) : hue;
    hue = (hue >= 360) ? (hue - 360) : hue;
    const satScale = 0.1;
    let sat = color.sat + (satScale * event.movementY);
    sat = Math.min(Math.max(sat, 0), 100);
    dispatch(setColorHsl(hue, sat, color.light));
  }
}

function updateLight(color, event, dispatch) {
  if(event.buttons === 1) {
    event.preventDefault();
    event.stopPropagation();
    const scale = -0.1;
    let light = color.light + (scale * event.movementY);
    light = Math.min(Math.max(light, 0), 100);
    dispatch(setColorHsl(color.hue, color.sat, light));
  }
}

function ColorPicker({ dispatch, color }) {
  const style = { backgroundColor: '#' + color.hex };
  return (
    <div 
      className={styles.colorPicker}
      style={style}>
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
      <div 
        className={styles.hueSatBox}
        onMouseMove={(event) => updateHueSat(color, event, dispatch)}>
        <div 
          className={styles.lightBox} 
          onMouseMove={(event) => updateLight(color, event, dispatch)}>
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
