import React from 'react';
import PropTypes from 'prop-types';
import styles from './BoxGraph.css';

function BoxGraph({ url, colors }) {
  return (
    <div className={styles.boxGraph}>
      <div>{Object.keys(colors).length} unique colors</div>
    </div>
  );
}

BoxGraph.propTypes = {
  url: PropTypes.string,
  colors: PropTypes.array
};

export default BoxGraph;
