import React from 'react';
import Collapsible from './Collapsible';
import ColorPicker from './ColorPicker';
/*
import SourceDisplay from './SourceDisplay';
import SourceList from './SourceList';
import ToolBar from './ToolBar';
import ToolDisplay from './ToolDisplay';
*/
import styles from './MainPane.css';

function MainPane() {
  return (
    <div className={styles.mainPane}>
      <Collapsible
        name='Color Picker'>
        <ColorPicker/>
      </Collapsible>
    </div>
  );
}

/*
      <nav className={styles.leftNav}>
        <ToolBar />
        <SourceList />
      </nav>
      <div className={styles.content}>
        <ToolDisplay />
        <SourceDisplay />
      </div>
*/
export default MainPane;
