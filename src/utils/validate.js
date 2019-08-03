import { ERROR_VALIDATE } from "../messages/index";

export const validateTitle = title => {
  if (title === null) {
    return ERROR_VALIDATE;
  }
};
