import React from 'react';

export default (props) => {
  const graph = props.graph;

  return (
    <div>
      <h4>{graph.title}</h4>
      <hr/>
      <div>
        {graph.content}
      </div>
    </div>
  )
}