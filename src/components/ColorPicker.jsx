import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';
import { connect } from 'react-redux';

function ColorPicker(props) {
  console.log('color picker props', props);
  return (
    <div 
      className={styles.colorPicker}
      onClick={() => props.dispatch({ type: 'SET_COLOR_HEX', hex: 'ffc000'})} >
      <span>ColorPicker</span>
    </div>
  );
}

ColorPicker.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(ColorPicker);
