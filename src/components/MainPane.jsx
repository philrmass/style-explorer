import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleColorPicker, toggleSource, toggleSources, toggleGraph } from '../actions';
import Collapsible from './Collapsible';
import ColorPicker from './ColorPicker';
import Graph from './Graph';
import Source from './Source';
import Sources from './Sources';
import styles from './MainPane.css';

function MainPane({ dispatch, ui }) {
  return (
    <div className={styles.mainPane}>
      <Collapsible
        name='Color Picker'
        isOpen={ui.colorPickerIsOpen}
        onClick={() => dispatch(toggleColorPicker())}>
        <ColorPicker/>
      </Collapsible>
      <Collapsible
        name='Graph'
        isOpen={ui.graphIsOpen}
        onClick={() => dispatch(toggleGraph())}>
        <Graph/>
      </Collapsible>
      <Collapsible
        name='Sources'
        isOpen={ui.sourcesIsOpen}
        onClick={() => dispatch(toggleSources())}>
        <Sources/>
      </Collapsible>
      <Collapsible
        name='Source'
        isOpen={ui.sourceIsOpen}
        onClick={() => dispatch(toggleSource())}>
        <Source/>
      </Collapsible>
    </div>
  );
}

MainPane.propTypes = {
  dispatch: PropTypes.func,
  ui: PropTypes.object
};

function mapStateToProps(state) {
  return { ui: state.ui };
}

export default connect(mapStateToProps)(MainPane);
