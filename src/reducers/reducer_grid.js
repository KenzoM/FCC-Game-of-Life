import { CELL_CLICK, CLEAR, RANDOMIZE, START } from '../actions/index';

function getRandomInt(min, max) {
    "use strict";
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

const initialState = {
  width: 3,
  height: 3,
  cells: Array.from({length: 9}, () => getRandomInt(0, 1)),
  generation: 0
};

export default function(state = initialState, action){
  switch (action.type) {
    case CELL_CLICK:
      const cells = [...state.cells]; //copy the cells first
      const coord = state.width * action.payload.y + action.payload.x //index coordinates
      const val = cells[coord] //current status of selected cell
      //toggle the status
      cells[coord] = val === 1 ? 0 : 1
      return {
        ...state,
        cells
      };
    case START:
      console.log(state,'this is state')
      console.log(action,'this is action')
      return state

    case CLEAR:
      const clearCells = state.cells.map( val => 0)
      //use Object.assign to create new object and update the grid-cells
      return Object.assign({}, state, {cells: clearCells})

    case RANDOMIZE:
      const boardDimension = state.width * state.height
      //use Object.assign to create new object and randomize the grid-cells
      const randomCells = Array.from({length: boardDimension }, () => getRandomInt(0, 1))
      return Object.assign({}, state, {cells: randomCells})
    }

  return state;
}
