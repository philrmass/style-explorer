import React from 'react';
import ColorBar from './ColorBar';
import MainPane from './MainPane';
import NavBar from './NavBar';
import styles from './App.css';

function App() {
  const color = { hex: '80b060' };
  return (
    <div className={styles.app}>
      <NavBar />
      <ColorBar 
        color={color}/>
      <MainPane />
    </div>
  );
}

export default App;
