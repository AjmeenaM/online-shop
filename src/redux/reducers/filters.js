/** @format */

// **  Initial State
const initialState = [];

const filters = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    default:
      return state;
  }
};

export default filters;