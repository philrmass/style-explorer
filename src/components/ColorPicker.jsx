import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setColorHex, setColorHsl } from '../actions';
import CopyIcon from './CopyIcon';
import Clipboard from '../clipboard';
import styles from './ColorPicker.css';

function updateLight(light, event) {
  const scale = -0.05;
  light = light + (scale * event.movementY);
  light = (light < 0) ? 0 : light;
  light = (light > 100) ? 100 : light;
  return light;
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
          onMouseMove={(event) => dispatch(setColorHsl(color.hue, color.sat, updateLight(color.light, event)))}>
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
