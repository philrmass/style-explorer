import React from 'react';
import ColorBar from './ColorBar';
import MainPane from './MainPane';
import NavBar from './NavBar';
import styles from './App.css';

function App() {
  return (
    <div className={styles.app}>
      <NavBar/>
      <ColorBar/>
      <MainPane/>
    </div>
  );
}

export default App;
