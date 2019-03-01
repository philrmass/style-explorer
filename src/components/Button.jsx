import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

function Button({children}) {
  return (
    <div className={styles.button}>
      <span>Button</span>
      {children}
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

export default Button;
