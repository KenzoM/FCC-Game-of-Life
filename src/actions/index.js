export const START = 'START';
export const CLEAR = 'CLEAR';
export const RANDOMIZE = 'RANDOMIZE';
export const CELL_CLICK = 'CELL_CLICK'


export function onCellClick(coord) {
  return {
    type: CELL_CLICK,
    payload: coord
  }
}
