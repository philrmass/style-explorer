import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ColorPicker.css';

function ColorPicker({ dispatch, color }) {
  const style = { backgroundColor: '#' + color.hex };
  return (
    <div 
      className={styles.colorPicker}
      style={style}
      onClick={() => dispatch({ type: 'SET_COLOR_HEX', hex: '6b2097'})}>
      <div>H {color.hue}</div>
      <div>S {color.sat}</div>
      <div>L {color.light}</div>
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
