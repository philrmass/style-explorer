import React from 'react';
import PropTypes from 'prop-types';
import styles from './BoxGraph.css';

class BoxGraph extends React.Component {
  constructor(props) {
    super(props);
    this.graphCanvas = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps) {
    const last = Object.keys(prevProps.colors).length;
    const now = Object.keys(this.props.colors).length;
    console.log('snap\np=', last, '\nn=', now);
    if(last != now) {
      this.renderGraph(this.props.colors);
    }
  }

  renderGraph(colors) {
    const graphSize = 400;
    const hueMax = 360;
    const satMax = 100;
    const lightMax = 100;
    const values = Object.values(colors);
    let canvas = this.graphCanvas.current;
    canvas.width = graphSize;
    canvas.height = graphSize;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    values.forEach((color) => {
      const x = ((graphSize - 1) / hueMax) * color.hue;
      const y = (graphSize - 1) - (((graphSize - 1) / satMax) * color.sat);
      ctx.fillStyle = '#' + color.hex;
      ctx.fillRect(x, y, 1, 1);
    });
  }

  render() {
    return (
      <div className={styles.boxGraph}>
        <div className={styles.label}>
          {Object.keys(this.props.colors).length} unique colors
        </div>
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
