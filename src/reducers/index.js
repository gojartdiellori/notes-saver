import {
  ADD_NOTES,
  DELETE_NOTES,
  ADD_NEW_CATEGORY
} from "../constants/action-type";
import { initalStore } from "../store/initalStore";

function rootReducer(state = initalStore, action) {
  if (action.type === ADD_NOTES) {
    return Object.assign({}, state, {
      notes: state.notes.concat(action.payload)
    });
  } else if (action.type === DELETE_NOTES) {
    return Object.assign({}, state, {
      notes: [...state.notes.filter(note => note.id !== action.payload.id)]
    });
  } else if (action.type === ADD_NEW_CATEGORY) {
    return Object.assign({}, state, {
      settings: {
        ...state.settings,
        categories: [...state.settings.categories, action.payload]
      }
    });
  }
  return state;
}
export default rootReducer;
