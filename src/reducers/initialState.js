function getRandomInt(min, max) {
    "use strict";
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

const initialState = {
  width: 70,
  height: 40,
  generation: 0,
  start: true
};

initialState.cells = Array.from(
  {length: initialState.width * initialState.height}, () => getRandomInt(0, 1)
)
//////////////////////////
//////////////////

export default initialState;
