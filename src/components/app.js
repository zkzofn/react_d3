import React, { Component } from 'react';
import NavBar from '../containers/nav_bar';
import InsertData from '../containers/insert_data';
import SelectChart from '../containers/select_chart';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <InsertData />
        <SelectChart />
      </div>
    );
  }
}
