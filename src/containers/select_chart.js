import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thumbnail from '../components/thumbnail';
import AboutGraph from '../components/about_graph';

class SelectChart extends Component {
  renderThumbnail(graph) {
    return (
      <Thumbnail graph={graph} key={graph.title} />
    );
  }

  render() {
    return (
      <section>
        <h3>Choose a Chart</h3>

        <AboutGraph graph={this.props.activeGraph === null ? this.props.graphs[0] : this.props.activeGraph} />

        <div className="col-lg-9 col-md-9">
          {this.props.graphs.map(this.renderThumbnail)}
        </div>

      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeGraph: state.activeGraph,
    graphs: state.graphs
  }
}

export default connect(mapStateToProps)(SelectChart);