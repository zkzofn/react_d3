import React, {Component} from 'react';

class Customization extends Component {
  render() {
    return (
      <section>
        <h3>Customize your Visualization</h3>
        <div className="row">
          <div className="col-lg-3">
            <div>
              <p>Width</p>
              <div>
                <input type="text"/>
              </div>
            </div>
            <div>
              <p>Height</p>
              <div>
                <input type="text"/>
              </div>
            </div>
            <div>
              <p>Node width</p>
              <div>
                <input type="text"/>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="chart-resize">
              <svg>
                <img src="/assets/img/thumbnail/barchart.png" alt=""/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Customization;