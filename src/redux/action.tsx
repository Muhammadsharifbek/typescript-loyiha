import { ActionTypes } from "./reducer";
import { IUser } from "../shared/interfaces/user.interface";

export const userSuccess = (user: IUser) => {
  return {
    type: ActionTypes.UserSuccess,
    payload: user,
  };
};

export const userFailure = (error: Error) => {
  return {
    type: ActionTypes.UserFailure,
    payload: error,
  };
};

export const userRequest = () => {
  return {
    type: ActionTypes.UserRequest,
  };
};
