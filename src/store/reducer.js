import { combineReducers } from "redux"

const initialState = {
  count: 0,
  text: ''
};

const count = (count = initialState.count, action) => {
    switch (action.type) {
      case 'INCREMENT': 
        return count + 1;
      case 'DECREMENT': 
        return count - 1;
      default: 
        return count;
    }
};

const text = (text = initialState.text, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT': 
      return action.text;
    default: 
      return text;
  }
};

export default combineReducers({
  count,
  text
});