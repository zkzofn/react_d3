import React from 'react';

export default (props) => {
  const graph = props.graph;

  return (
    <div className="col-lg-4 col-md-6">
      <div className="layout" >
        <div style={{backgroundImage: `url(${graph.thumbnailUrl})`}}
             className="layout-thumb responsive"></div>
        <p className="layout-inner">
          <span className="layout-title">{graph.title}</span>
        </p>
      </div>
    </div>
  )
}