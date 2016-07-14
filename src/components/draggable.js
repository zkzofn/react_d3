import React, {Component} from 'react';


class Draggable extends Component {
  drag(event) {
    event.dataTransfer.setData("draggableId", event.target.id);
    event.dataTransfer.setData("draggableType", this.props.type);
  }

  render() {
    return (
      <div id={this.props.id}
           className={this.props.className}
           draggable="true"
           onDragStart={this.drag.bind(this)}>
        {this.props.children}
      </div>
    );

  }
}

export default Draggable;