import { Screens } from "./screens";

export type Observer = HTMLElement & { render: () => void };

export interface Action {
  type: Actions;
  payload: string;
}

export enum Actions {
  "CHANGE_SCREEN" = "CHANGE_SCREEN"
}

export interface AppState {
  screen: Screens | string
  searchText: string
}
