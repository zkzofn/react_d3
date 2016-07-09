import { combineReducers } from 'redux';
import GraphsReducer from './reducer_graphs';
import ActiveGraph from './reducer_active_graph';

const rootReducer = combineReducers({
  graphs: GraphsReducer,
  activeGraph: ActiveGraph
});

export default rootReducer;
