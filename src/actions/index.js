export const START = 'START';
export const CLEAR = 'CLEAR';
export const RANDOMIZE = 'RANDOMIZE';
export const STEP = 'STEP';
export const CELL_CLICK = 'CELL_CLICK';
export const EXPORT = 'EXPORT';
export const TOGGLE = 'TOGGLE';
export const EXAMPLE = 'EXAMPLE';

export function onCellClick(coord) {
  return {
    type: CELL_CLICK,
    payload: coord
  }
}
export function start(currentGeneration) {
  return {
    type: START,
    payload: currentGeneration
  }
}
export function clear() {
  return {
    type: CLEAR
  }
}
export function randomize() {
  return {
    type: RANDOMIZE
  }
}
export function toggle() {
  return {
    type: TOGGLE
  }
}

export function step(currentGeneration){
  return {
    type: STEP,
    payload: currentGeneration
  }
}

export function example() {
  return {
    type: EXAMPLE
  }
}
