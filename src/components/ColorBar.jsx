import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CopyIcon from './CopyIcon';
import styles from './ColorBar.css';

function copyToClipboard(id) {
  console.log('copy', id);
  let range = document.createRange();
  range.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}

function ColorBar({ color }) {
  const style= { backgroundColor: '#' + color.hex };
  return (
    <div className={styles.colorBar} style={style}>
      <div className={styles.colorItem}>
        <span id='hexText'>
          {'#' + color.hex}
        </span>
        <button onClick={() => copyToClipboard('hexText')}>
          <CopyIcon/>
        </button>
      </div>
      <div className={styles.colorItem}>
        <span id='rgbaText'>
          {`rgba(${color.red}, ${color.green}, ${color.blue}, 1)`}
        </span>
        <button onClick={() => copyToClipboard('rgbaText')}>
          <CopyIcon/>
        </button>
      </div>
    </div>
  );
}

ColorBar.propTypes = {
  color: PropTypes.object
};

function mapStateToProps(state) {
  return { color: state.currentColor };
}

export default connect(mapStateToProps)(ColorBar);
