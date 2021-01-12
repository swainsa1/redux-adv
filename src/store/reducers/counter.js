import * as actionTypes from "../actions/actionTypes";
import updateObject from "../updateObject";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // This is also another place where you can add the data
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.val });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });

    //This is an alternative way to do things instead of spread operator
    ///const newState = Object.assign({}, state);
    ///newState.counter = state.counter + 1;
    ///return newState;

    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.val });

    default:
      return state;
  }
};

export default reducer;
