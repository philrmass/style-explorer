import React from 'react';
import ColorBar from './ColorBar';
import MainPane from './MainPane';
import NavBar from './NavBar';
import SearchPane from './SearchPane';

function SourceContainer() {
  return (
    <div>
      <NavBar />
      <ColorBar />
      <MainPane />
      <SearchPane />
    </div>
  );
}

export default SourceContainer;
