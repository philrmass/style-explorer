import React from 'react';
import SourceDisplay from './SourceDisplay';
import SourceList from './SourceList';
import ToolBar from './ToolBar';
import ToolDisplay from './ToolDisplay';
import styles from './MainPane.css';

function MainPane() {
  return (
    <div className={styles.mainPane}>
      <nav className={styles.leftNav}>
        <ToolBar />
        <SourceList />
      </nav>
      <div className={styles.content}>
        <ToolDisplay />
        <SourceDisplay />
      </div>
    </div>
  );
}

export default MainPane;
