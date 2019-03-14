import React from 'react';
import PropTypes from 'prop-types';
import styles from './BoxGraph.css';

class BoxGraph extends React.Component {
  constructor(props) {
    super(props);
    this.graphCanvas = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps) {
    if(prevProps.url !== this.props.url) {
      this.renderGraph(this.props.colors);
    }
  }

  renderGraph(colors) {
    const graphSize = 400;
    const values = Object.values(colors);
    let canvas = this.graphCanvas.current;
    canvas.width = graphSize;
    canvas.height = graphSize;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ff8000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log('render graph', values.length, canvas, ctx);
  }

  render() {
    return (
      <div className={styles.boxGraph}>
        <div>{Object.keys(this.props.colors).length} unique colors</div>
        <canvas 
          id='graphCanvas' 
          ref={this.graphCanvas}
          className={styles.graphCanvas}>
        </canvas>
      </div>
    );
  }
}

BoxGraph.propTypes = {
  url: PropTypes.string,
  colors: PropTypes.array
};

export default BoxGraph;
