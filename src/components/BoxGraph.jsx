import React from 'react';
import PropTypes from 'prop-types';
import styles from './BoxGraph.css';

class BoxGraph extends React.Component {
  constructor(props) {
    super(props);
    this.graphCanvas = React.createRef();
    this.state = { count: 0, unique: 0 };
  }

  getSnapshotBeforeUpdate(prevProps) {
    const lastLength = Object.keys(prevProps.colors).length;
    const values = Object.values(this.props.colors);
    if((values.length > 0) && (values.length !== lastLength)) {
      this.renderGraph(values);
    }
  }

  renderGraph(colors) {
    const start = Date.now();
    const size = 100;
    const dotSize = 4;
    const fullSize = dotSize * size;
    const hueMax = 360;
    const satMax = 100;
    const lightMax = 100;

    const canvas = this.graphCanvas.current;
    const ctx = canvas.getContext('2d');
    canvas.width = fullSize;
    canvas.height = fullSize;
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, fullSize, fullSize);

    let count = 0;
    colors.forEach((color) => {
      const x = ((size / hueMax) * color.hue);
      const y = ((size / satMax) * color.sat);
      ctx.fillStyle = '#' + color.hex;
      ctx.fillRect(x, y, 1, 1);
      count += color.count;
    });
    this.setState({ count: count, unique: (100 * (colors.length / count)) });
    const time = Date.now() - start;
    console.log('graph ', (0.001 * time).toFixed(3), 's\n', colors.length, count, (100 * (colors.length / count)).toFixed(1));
  }

  render() {
    return (
      <div className={styles.boxGraph}>
        <div className={styles.label}>
          {`${this.state.count} colors, ${this.state.unique.toFixed(1)}% unique`}
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
