import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Magnifier from './Magnifier';
import styles from './Source.css';

function Source({url}) {
  return (
    <div className={styles.source}>
      {url && 
        <div>
          <img className={styles.image} src={url}/>
          <Magnifier />
        </div>}
    </div>
  );
}

Source.propTypes = {
  url: PropTypes.string
};

function mapStateToProps(state) {
  return { url: state.currentSource };
}

export default connect(mapStateToProps)(Source);
