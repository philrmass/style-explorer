import React from 'react';
import ColorBar from './ColorBar';
import MainPane from './MainPane';
import NavBar from './NavBar';
import StartupPane from './StartupPane';

function SourceContainer() {
  return (
    <div>
      <NavBar />
      <ColorBar />
      <MainPane />
      <StartupPane />
    </div>
  );
}

export default SourceContainer;
