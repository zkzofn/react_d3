import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectGraph } from '../actions/index';
import AboutGraph from '../components/about_graph';

class SelectChart extends Component {
  renderThumbnail() {
    return this.props.graphs.map((graph) => {
      let layoutClass = 'layout';

      if(this.props.activeGraph) {
        if(this.props.activeGraph.title == graph.title) {
          layoutClass = 'layout selected';
        } else {
          layoutClass = 'layout';
        }
      }

      return(
        <div className="col-lg-4 col-md-6" key={graph.title} onClick={()=>this.props.selectGraph(graph)}>
          <div className={layoutClass} >
            <div style={{backgroundImage: `url(${graph.thumbnailUrl})`}}
                 className="layout-thumb responsive"></div>
            <p className="layout-inner">
              <span className="layout-title">{graph.title}</span>
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section>
        <div className="clearfix">
          <h3>Choose a Chart</h3>

          <div className="col-lg-3 col-md-3">
            <AboutGraph graph={this.props.activeGraph === null ? this.props.graphs[0] : this.props.activeGraph} />
          </div>

          <div className="col-lg-9 col-md-9">
            {this.renderThumbnail()}
          </div>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectGraph: selectGraph }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectChart);