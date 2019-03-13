import React from 'react';
import PropTypes from 'prop-types';
import styles from './BoxGraph.css';

function BoxGraph({ colors }) {
  return (
    <div className={styles.boxGraph}>
      <div>{colors && colors.length} colors</div>
    </div>
  );
}

BoxGraph.propTypes = {
  colors: PropTypes.array
};

export default BoxGraph;
