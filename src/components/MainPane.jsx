import React from 'react';
import Collapsible from './Collapsible';
import ColorPicker from './ColorPicker';
import Graph from './Graph';
import Source from './Source';
import Sources from './Sources';
import styles from './MainPane.css';

function MainPane() {
  return (
    <div className={styles.mainPane}>
      <Collapsible
        name='Color Picker'>
        <ColorPicker/>
      </Collapsible>
      <Collapsible
        name='Graph'>
        <Graph/>
      </Collapsible>
      <Collapsible
        name='Sources'>
        <Sources/>
      </Collapsible>
      <Collapsible
        name='Source'>
        <Source/>
      </Collapsible>
    </div>
  );
}

export default MainPane;
