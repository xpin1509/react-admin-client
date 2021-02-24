import * as actionTypes from "./actionTypes";

export const increase = () => {
  return {
    type: actionTypes.INCREMENT,
  }
}

export const decrease = () => {
    return {
        type: actionTypes.DECREMENT,
      }
}

export const changeText = (text) => {
    return {
        type: actionTypes.CHANGE_TEXT,
        text
    }
}