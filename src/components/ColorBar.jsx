import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from './Button';
import CopyIcon from './CopyIcon';
import styles from './ColorBar.css';

function ColorBar({ color }) {
  const style= { backgroundColor: '#' + color.hex };
  return (
    <div className={styles.colorBar} style={style}>
      <div className={styles.colorItem}>
        <span>#{color.hex}</span>
        <Button>
          <CopyIcon/>
        </Button>
      </div>
      <div className={styles.colorItem}>
        <span>rgba({color.red}, {color.green}, {color.blue}, 1)</span>
        <Button>
          <CopyIcon/>
        </Button>
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
