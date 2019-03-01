import React from 'react';
import NavBar from './NavBar';
import ColorBar from './ColorBar';
import ToolBar from './ToolBar';
import SourceList from './SourceList';
import styles from './MainPane.css';

function MainPane() {
  return (
    <div className={styles.mainPane}>
      <span>MainPane</span>
      <NavBar />
      <ColorBar />
      <ToolBar />
      <SourceList />
    </div>
  );
}

export default MainPane;
