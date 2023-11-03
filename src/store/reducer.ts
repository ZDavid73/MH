import { Action, Actions, AppState } from "../types/store";

export const reducer = (action: Action, currentState: AppState): AppState => {
  switch (action.type) {
    case Actions.CHANGE_SCREEN:
      return {
        ...currentState,
        screen: action.payload
      };
    case Actions.CHANGE_SEARCH_TEXT:
      return {
        ...currentState,
        searchText: action.payload
      };
    case Actions.CHANGE_VIEW_PRODUCT:
      return {
        ...currentState,
        viewProduct: action.payload
      };
    default:
      return currentState;
  }
};
