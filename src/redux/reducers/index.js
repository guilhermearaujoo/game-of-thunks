import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from "../actions";

const initialState = {
  isFetching: false,
  data: '',
  errorMessage: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
        data: ""
      };

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        errorMessage: ""
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
        data: ""
      };

    default:
      return state;
  }
}


export default reducer;