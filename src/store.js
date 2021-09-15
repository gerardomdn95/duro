import { createStore } from 'redux';

const initialState = {}

const reducer = (state = initialState, action) => {
  if(action.type === 'APP_LOAD') {
    const { data } = action;
    return {
      ...state,
      ...data
    }
  }
  return state;
}

export default createStore(reducer);