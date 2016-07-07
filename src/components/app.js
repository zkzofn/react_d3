import React, { Component } from 'react';
import NavBar from './nav_bar';
import InsertData from './insert_data';
import SelectChart from './select_chart';

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
