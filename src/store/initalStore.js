import * as colorMes from "../messages/colors";

export const initalStore = {
  notes: [],
  notesClick: false,
  settings: {
    firstTime: true,
    categories: [
      {
        name: "Work",
        color: colorMes.FIRST_COLOR
      },
      {
        name: "Home",
        color: colorMes.SECOND_COLOR
      },
      {
        name: "Improvments",
        color: colorMes.THIRD_COLOR
      },
      {
        name: "Hobbies",
        color: colorMes.FOURTH_COLOR
      },
      {
        name: "Side job",
        color: colorMes.FIFTH_COLOR
      }
    ]
  }
};
