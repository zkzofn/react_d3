import React from 'react';

export default (props) => {
  const graph = props.graph;

  return (
    <div className="col-lg-3 col-md-3">
      <h4>{graph.title}</h4>
      <hr/>
      <div>
        {graph.content}
      </div>
    </div>
  )
}