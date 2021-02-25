import * as ActionTypes from './ActionTypes'

export const increment = (counterCaption) => {
    return {
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    }
}

export const decrement = (counterCaption) => {
    return {
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    }
}

export const incrementAsync = (counterCaption) => {
    return {
        type: ActionTypes.INCREMENTASYNC,
        counterCaption: counterCaption
    }
}

export const decrementAsync = (counterCaption) => {
    return {
        type: ActionTypes.DECREMENTASYNC,
        counterCaption: counterCaption
    }
}