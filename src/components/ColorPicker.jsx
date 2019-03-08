import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';
import { connect } from 'react-redux';

const style = { backgroundColor: 'red' };
//const style = { backgroundColor: props.color.hex };

function ColorPicker(props) {
  console.log('PICKER', props.color.hex);

  return (
    <div 
      className={styles.colorPicker}
      style={style}
      onClick={() => props.dispatch({ type: 'SET_COLOR_HEX', hex: '6b2097'})} >
      <span>ColorPicker</span>
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
