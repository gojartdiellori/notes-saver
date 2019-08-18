import {
  ADD_NOTES,
  DELETE_NOTES,
  ADD_NEW_CATEGORY,
  CHANGE_COLOR,
  SWITCH_NOTE_MODAL
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
  } else if (action.type === CHANGE_COLOR) {
    return Object.assign({}, state, {
      settings: {
        ...state.settings,
        categories: state.settings.categories.map((content, i) =>
          i === action.payload.key
            ? {
                ...content,
                color: action.payload.id
              }
            : content
        )
      }
    });
  } else if (action.type === SWITCH_NOTE_MODAL) {
    return Object.assign({}, state, {
      notesClick: action.payload.boolean
    });
  }
  return state;
}
export default rootReducer;
