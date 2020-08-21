import { 
    FETCH_ALL_POST,
    SET_POST,
    POST_LOADING,
    SUBMIT_POST_LOADING
 } from "../types";

const initialState = {
    posts:[],
    isLoadPost: false,
    isLoadSubmit:false
}

const AuthReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
        return{
            ...state,
            posts: action.payload
        }
    case SUBMIT_POST_LOADING:
        return{
            ...state,
            isLoadSubmit: action.payload
        }
    case POST_LOADING:
        return{
            ...state,
            isLoadPost: action.payload
        }
    default:
      return state;
  }
};

export default AuthReducers;
