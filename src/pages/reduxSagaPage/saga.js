import { call, put, takeEvery, takeLatest, delay, select } from "redux-saga/effects";
import { INCREMENT, DECREMENT, INCREMENTASYNC, DECREMENTASYNC } from "./ActionTypes";

function request () {
    return new Promise((reolve, reject) => {
        setTimeout(() => {
            reolve()
        }, 1000)
    })
}

function* incrementLater({ counterCaption }) {
    try {
        const state = yield select()
        console.log(state)
        yield delay(1000)
        yield put({type: INCREMENT, counterCaption });
    } catch (e) {
    //    yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* decrementLater({ counterCaption }) {
    try {
        const state = yield select()
        console.log(state)
        yield delay(1000)
        yield put({type: DECREMENT, counterCaption });
        //    yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
        //    yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* mySaga () {
    yield takeEvery(INCREMENTASYNC, incrementLater)

    yield takeEvery(DECREMENTASYNC, decrementLater)
}

 export default mySaga