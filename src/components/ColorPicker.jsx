import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setColorHsl } from '../actions';
import CopyIcon from './CopyIcon';
import Clipboard from '../clipboard';
import styles from './ColorPicker.css';

function updateLight(color, event, dispatch) {
  if(event.buttons === 1) {
    const scale = -0.05;
    let light = color.light + (scale * event.movementY);
    light = (light < 0) ? 0 : light;
    light = (light > 100) ? 100 : light;
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
      <div className={styles.hueSatBox}>
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
