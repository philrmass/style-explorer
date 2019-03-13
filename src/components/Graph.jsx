import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BoxGraph from './BoxGraph';
import styles from './Graph.css';

function Graph({ sources, url }) {
  const current = sources[url];
  const name = current && current.name;
  const colors = current && current.colors && current.colors.length;
  return (
    <div className={styles.boxGraph}>
      <div style={{fontSize: '0.8em'}}>
        <div>Sources: {Object.keys(sources).length}</div>
        <div>{name}</div>
        <div>{colors}</div>
      </div>
      <BoxGraph/>
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
