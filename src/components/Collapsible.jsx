import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from './Collapsible.css';

function Collapsible({name, children}) {
  return (
    <div className={styles.collapsible}>
      <div className={styles.title}>
        <Button>
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
  children: PropTypes.element
};

export default Collapsible;
