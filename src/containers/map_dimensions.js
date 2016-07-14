import React, {Component} from 'react';
import Draggable from '../components/draggable';
import Droppable from '../components/droppable';

class MapDimensions extends Component {
  renderDimensions() {
    return (
      <div>
        <Draggable id="drag1" type="1" className="dimension">Cocktail1</Draggable>
        <Draggable id="drag2" type="2" className="dimension">Cocktail2</Draggable>
        <Draggable id="drag3" type="3" className="dimension">Cocktail3</Draggable>
        <Draggable id="drag4" type="4" className="dimension">Cocktail4</Draggable>
      </div>
    )
  }

  renderDimensionModel() {
    return (
      <div className="dimensions-model">
        <p className="dimension-title">Steps</p>
        <div className="msg">
          Drag numbers here
        </div>
        <Droppable className="dimensions-container" types={['1', '3']}>

        </Droppable>
      </div>
    )
  }


  render() {
    return (
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