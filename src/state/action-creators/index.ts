import { Action } from "../actions";
import { ActionType } from "../action-types";

export const deposit = (payload: number): Action => {
  return {
    type: ActionType.DEPOSIT,
    payload,
  };
};

export const withdraw = (payload: number): Action => {
  return {
    type: ActionType.WITHDRAW,
    payload,
  };
};

export const bankrupt = (): Action => {
  return {
    type: ActionType.BANKRUPT,
  };
};
