import { AddCounter, SubCounter } from "./actionTypes";

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case AddCounter:
      return state + action.payload;

    case SubCounter:
      return state - action.payload;

    default:
      return state;
  }
};

export default reducerCounter;
