import React, {Component} from 'react';


class Droppable extends Component {
  allowDrop(event) {
    event.preventDefault();
  }

  drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("dragTarget");
    event.target.appendChild(document.getElementById(data));
  }

  render() {
    return (
      <div id="div1" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>
        Droppable
      </div>

    )
  }
}

export default Droppable;