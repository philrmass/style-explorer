import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from './Collapsible.css';

function Collapsible({name, children, onClick}) {
  return (
    <div className={styles.collapsible}>
      <div className={styles.title}>
        <Button onClick={onClick}>
          +
        </Button>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

Collapsible.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element,
  onClick: PropTypes.func
};

export default Collapsible;
