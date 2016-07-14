import React, {Component} from 'react';
import NavBar from '../containers/nav_bar';
import InsertData from '../containers/insert_data';
import SelectChart from '../containers/select_chart';
import MapDimensions from '../containers/map_dimensions';
import Customization from '../containers/customization';
import Export from '../containers/export';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <InsertData />
        <SelectChart />
        <MapDimensions />
        <Customization />
        <Export />
      </div>
    );
  }
}
