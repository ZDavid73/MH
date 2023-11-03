import { Action, Actions } from "../types/store";

export const changeScreen = (payload: string): Action => ({
  type: Actions.CHANGE_SCREEN,
  payload,
});

export const changeSeaarchText = (payload: string): Action => ({
  type: Actions.CHANGE_SEARCH_TEXT,
  payload,
});