import React from 'react';
import ColorBar from './ColorBar';
import NavBar from './NavBar';
import SourceDisplay from './SourceDisplay';
import SourceList from './SourceList';
import ToolBar from './ToolBar';
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
      <SourceDisplay />
    </div>
  );
}

export default MainPane;
