import * as colorMes from "../messages/colors";

export const initalStore = {
  notes: [],
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
