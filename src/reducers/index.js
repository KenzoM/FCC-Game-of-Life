import { combineReducers } from 'redux';
import grid from './reducer_grid'

const rootReducer = combineReducers({
  grid : grid
});

export default rootReducer;
