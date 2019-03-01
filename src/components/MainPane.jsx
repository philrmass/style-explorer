import React from 'react';
import NavBar from './NavBar';
import ColorBar from './ColorBar';
import ToolBar from './ToolBar';
import SourceList from './SourceList';
import ToolDisplay from './ToolDisplay';
import styles from './MainPane.css';

function MainPane() {
  return (
    <div className={styles.mainPane}>
      <span>MainPane</span>
      <NavBar />
      <ColorBar />
      <ToolBar />
      <SourceList />
      <ToolDisplay />
    </div>
  );
}

export default MainPane;
