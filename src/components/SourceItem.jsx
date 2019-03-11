import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSource } from '../actions';
import styles from './SourceItem.css';

function SourceItem({ dispatch, name, url }) {
  return (
    <div 
      className={styles.sourceItem}
      onClick={() => dispatch(setSource(url))} >
      <span>{name}</span>
    </div>
  );
}

SourceItem.propTypes = {
  dispatch: PropTypes.func,
  name: PropTypes.string,
  url: PropTypes.string
};

export default connect()(SourceItem);
