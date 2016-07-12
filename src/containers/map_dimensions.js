import React, { Component } from 'react';

class MapDimensions extends Component {
  renderDimensions() {
    return(
      <div>
        <li className="dimension" draggable="true">Cocktail</li>
        <li className="dimension" draggable="true">Parts</li>
        <li className="dimension" draggable="true">Ingredient</li>
      </div>
    )

  }

  renderCategory() {
    return(
      <div className="dimensions-model">
        
      </div>
    )
  }


  render() {
    return(
      <section>
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
                  {this.renderCategory()}
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