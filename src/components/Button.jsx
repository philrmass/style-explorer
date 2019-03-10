import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

function Button({ onClick, children }) {
  return (
    <button 
      className={styles.button}
      onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

export default Button;
