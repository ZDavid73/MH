import { Screens } from "./screens";

export type Observer = HTMLElement & { render: () => void };

export interface Action {
  type: Actions;
  payload: string;
}

export enum Actions {
  "CHANGE_SCREEN" = "CHANGE_SCREEN",
  "CHANGE_SEARCH_TEXT" = "CHANGE_SEARCH_TEXT",
  "CHANGE_VIEW_PRODUCT" = "CHANGE_VIEW_PRODUCT"
}

export interface AppState {
  screen: Screens | string
  searchText: string,
  viewProduct: string
}
