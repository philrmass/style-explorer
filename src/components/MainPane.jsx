import React from 'react';
import NavBar from './NavBar';
import ColorBar from './ColorBar';
import styles from './MainPane.css';

function MainPane() {
  return (
    <div className={styles.mainPane}>
      <span>MainPane</span>
      <NavBar />
      <ColorBar />
    </div>
  );
}

export default MainPane;
