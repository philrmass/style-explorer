import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SourceItem from './SourceItem';
import styles from './SourceList.css';

function SourceList({ sources }) {
  const list = Object.values(sources);
  return (
    <div className={styles.sourceList}>
      {(list.length > 0) && <span>Recent</span>}
      {list.map(source => {
        return (
          <SourceItem 
            key={source.url} 
            name={source.name}
            url={source.url} />
        );
      })}
    </div>
  );
}

SourceList.propTypes = {
  sources: PropTypes.object
};

function mapStateToProps(state) {
  return { sources: state.sources };
}

export default connect(mapStateToProps)(SourceList);
