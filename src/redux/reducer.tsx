import { IUser } from "../shared/interfaces/user.interface";

interface IState {
  currentUser: IUser | null;
  isLoading: boolean;
  error: object | null;
}

const initialStore: IState = {
  currentUser: null,
  error: null,
  isLoading: false,
};

export enum ActionTypes {
  UserRequest = "USER_REQUEST",
  UserSuccess = "USER_SUCCESS",
  UserFailure = "USER_FAILURE",
}

type IUserRequestAction = {
  type: ActionTypes.UserRequest;
};

type IUserSuccessAction = {
  type: ActionTypes.UserSuccess;
  payload: IUser;
};

type IUserFailureAction = {
  type: ActionTypes.UserFailure;
  payload: Error;
};

type IAction = IUserRequestAction | IUserSuccessAction | IUserFailureAction;

function reducer(state = initialStore, action: IAction) {
  switch (action.type) {
    case ActionTypes.UserRequest:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.UserSuccess:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
      };
    case ActionTypes.UserFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
