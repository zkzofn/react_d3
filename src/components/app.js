import React, {Component} from 'react';
import NavBar from '../containers/nav_bar';
import InsertData from '../containers/insert_data';
import SelectChart from '../containers/select_chart';
import MapDimensions from '../containers/map_dimensions';
import Draggable from './draggable';
import Droppable from './droppable';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <InsertData />
        <SelectChart />
        
        <MapDimensions />

        <Droppable></Droppable>
        <Draggable></Draggable>
        <Droppable></Droppable>
      </div>
    );
  }
}
