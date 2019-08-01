import { ADD_NOTES, DELETE_NOTES } from "../constants/action-type";

export function addNotes(payload) {
  return { type: ADD_NOTES, payload };
}
export function deleteNotes(payload) {
  return { type: DELETE_NOTES, payload };
}
