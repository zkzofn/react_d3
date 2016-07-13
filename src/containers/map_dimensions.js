import React, { Component } from 'react';

class MapDimensions extends Component {

  drag(event) {
    console.log("drag here");
  }

  renderDimensions() {
    return(
      <div>
        <li className="dimension" draggable="true" onDragStart={this.drag.bind(this)}>Cocktail</li>
        <li className="dimension" draggable="true">Parts</li>
        <li className="dimension" draggable="true">Ingredient</li>
      </div>
    )

  }

  renderDimensionModel() {
    return(
      <div className="dimensions-model">
        <p className="dimension-title">Steps</p>
        <ul className="dimensions-container list-unstyled">
          <div className="msg">
            Drag numbers here
          </div>
          <li className="dimension">
            key type
          </li>
        </ul>

        

      </div>
    )
  }


  render() {
    return(
      <section className="dark">
        <div className="clearfix">
          <h3>Map your dimensions</h3>
          <div>
            <div className="col-lg-3 col-md-3">
              <ul className="list-group">
                {this.renderDimensions()}
              </ul>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  {this.renderDimensionModel()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default MapDimensions;