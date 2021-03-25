import * as types from "../../../_constants/ActionType";
var initialState = {};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ID:
      state = {
        id: action.id
      }
      return state;
    default:
      return state;
  }
};
export default myReducer;