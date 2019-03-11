import React from 'react';
import PropTypes from 'prop-types';
import styles from './SourceItem.css';

function SourceItem({ name }) {
  return (
    <div className={styles.sourceItem}>
      <span>{name}</span>
    </div>
  );
}

SourceItem.propTypes = {
  name: PropTypes.string
};

export default SourceItem;
