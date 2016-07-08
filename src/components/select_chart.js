import React, { Component } from 'react';
import Thumbnail from 'react-bootstrap';

class SelectChart extends Component {
  render() {
    return (
      <section>
        <h3>Choose a Chart</h3>
        <div className="col-lg-3 col-md-3">
          <h4>Alluvial Diagram (Fineo-like)</h4>
          <span className="icon-bar"></span>
          <div>
            Alluvial diagrams allow to represent flows and to see correlations between categorical dimensions, visually
            linking to the number of elements sharing the same categories. It is useful to see the evolution of cluster
            (such as the number of people belonging to a specific group). It can also be used to represent bipartite
            graphs, using each node group as dimensions.
            Mainly based on our previous work with Fineo, it is inspired by http://bost.ocks.org/mike/sankey/
          </div>
        </div>

        <div className="col-lg-9 col-md-9">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="layout">
              <div style={{backgroundImage: 'url(/assets/img/thumbnail/barchart.png)'}}
                   className="layout-thumb responsive"></div>
              <p className="layout-inner">
                <span className="layout-title">Alluvial Diagram (Fineo-like)</span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="layout">
              <div style={{backgroundImage: 'url(/assets/img/thumbnail/barchart.png)'}}
                   className="layout-thumb responsive"></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="layout">
              <div style={{backgroundImage: 'url(/assets/img/thumbnail/barchart.png)'}}
                   className="layout-thumb responsive"></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="layout">
              <div style={{backgroundImage: 'url(/assets/img/thumbnail/barchart.png)'}}
                   className="layout-thumb responsive"></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="layout">
              <div style={{backgroundImage: 'url(/assets/img/thumbnail/barchart.png)'}}
                   className="layout-thumb responsive"></div>
            </div>
          </div>



        </div>



      </section>
    )
  }
}

export default SelectChart;