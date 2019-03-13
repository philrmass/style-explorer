import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from './Collapsible.css';

function Collapsible({name, isOpen, onClick, children }) {
  const contentStyle = (isOpen ? {} : { display: 'none' });
  return (
    <div className={styles.collapsible}>
      <div className={styles.title}>
        <Button onClick={onClick}>
          +
        </Button>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.content} style={contentStyle}>
        {children}
      </div>
    </div>
  );
}

Collapsible.propTypes = {
  name: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.element
};

export default Collapsible;
