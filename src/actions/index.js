export function selectGraph(graph) {
  return {
    type: 'GRAPH_SELECTED',
    payload: graph
  }
}