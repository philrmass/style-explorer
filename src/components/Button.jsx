import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

function Button({children}) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

export default Button;
