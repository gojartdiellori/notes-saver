import { ADD_NOTES, DELETE_NOTES } from "../constants/action-type";

const initialState = {
  notes: []
};

console.log(initialState);

function rootReducer(state = initialState, action) {
  if (action.type === ADD_NOTES) {
    return Object.assign({}, state, {
      notes: state.notes.concat(action.payload)
    });
  } else if (action.type === DELETE_NOTES) {
    return Object.assign({}, state, {
      notes: [...state.notes.filter(note => note.id !== action.payload.id)]
    });
  }
  return state;
}
export default rootReducer;
