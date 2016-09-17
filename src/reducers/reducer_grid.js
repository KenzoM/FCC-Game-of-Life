import { CELL_CLICK, CLEAR, RANDOMIZE } from '../actions/index';

function getRandomInt(min, max) {
    "use strict";
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

const initialState = {
  width: 10,
  height: 10,
  cells: Array.from({length: 100}, () => getRandomInt(0, 1)),
  generation: 0
};

export default function(state = initialState, action){
  switch (action.type) {
    case CELL_CLICK:
      const cells = [...state.cells]; //copy the cells first
      const index = state.width * action.payload.y + action.payload.x //index coordinates
      const val = cells[index] //current status of selected cell
      //toggle the status
      cells[index] = val === 1 ? 0 : 1
      return {
        ...state,
        cells
      };
    case CLEAR:
      const clearCell = state.cells.map( val => 0)
      //use Object.assign to create new object and update the grid-cells
      return Object.assign({}, state, {cells: clearCell})

    case RANDOMIZE:
      console.log(state)
      return state
    }

  return state;
}
