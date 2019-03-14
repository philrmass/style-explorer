import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BoxGraph from './BoxGraph';
import styles from './Graph.css';

function Graph({ sources, url }) {
  const colors = (sources[url] && sources[url].colors) || {};
  return (
    <div className={styles.boxGraph}>
      <div style={{fontSize: '0.8em'}}>
      </div>
      <BoxGraph 
        url={url}
        colors={colors} />
    </div>
  );
}

Graph.propTypes = {
  sources: PropTypes.object,
  url: PropTypes.string
};

function mapStateToProps(state) {
  return {
    sources: state.sources,
    url: state.currentSource
  };
}

export default connect(mapStateToProps)(Graph);
