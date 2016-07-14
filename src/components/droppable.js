import React, { Component } from 'react';

class Droppable extends Component {
  drop(event) {
    event.preventDefault();

    const draggableType = event.dataTransfer.getData("draggableType");
    const draggableId = event.dataTransfer.getData("draggableId");
    const droppableTypes = this.props.types;

    const newNode = document.getElementById(draggableId).cloneNode(true);

    newNode.id = Math.floor((Math.random() * 1000000) + 1);
    event.target.appendChild(newNode);

    if(droppableTypes.indexOf(draggableType) == -1) {
      document.getElementById(newNode.id).className = "dimension invalid";
    }
  }

  render() {
    return (
      <div id={this.props.id}
           className={this.props.className}
           onDrop={this.drop.bind(this)}
           onDragOver={event => event.preventDefault()}>
        {this.props.children}
      </div>
    )
  }
}

export default Droppable;