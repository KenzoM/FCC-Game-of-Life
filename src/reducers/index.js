import { combineReducers } from 'redux';
import recipeState  from './reducer_recipe'

const rootReducer = combineReducers({
  recipeState : recipeState
});

export default rootReducer;
