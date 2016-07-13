import React, {Component} from 'react';


class Draggable extends Component {
  onDrop(data) {
    console.log(data);
    // => banana  
  }


  drag(event) {
    event.dataTransfer.setData("dragTarget", event.target.id);
    console.log(event.dataTransfer.getData("text"));
  }
  
// return (
  //   <div>
  //     <ul>
  //       <Draggable type="fruit" data="banana">
  //         <li>Banana</li>
  //       </Draggable>
  //       <Draggable type="fruit" data="apple">
  //         <li>Apple</li>
  //       </Draggable>
  //       <Draggable type="metal" data="silver">
  //         <li>Silver</li>
  //       </Draggable>
  //     </ul>
  //     <Droppable
  //       types={['fruit']} // <= allowed drop types
  //       onDrop={this.onDrop.bind(this)}>
  //       <ul className="Smoothie">
  //         <li>here</li>
  //       </ul>
  //     </Droppable>
  //   </div >
  // )
  
  render() {
    return (
      <div>
        <img src="/assets/img/thumbnail/force.png"  id="drag1" draggable="true" onDragStart={this.drag.bind(this)} />

      </div>
    );
    
  }
}

export default Draggable;