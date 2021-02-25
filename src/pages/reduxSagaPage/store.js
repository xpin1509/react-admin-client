import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import createSagaMiddleware  from 'redux-saga';
import mySaga from "./saga";

const initValues = {
    'First': 0,
    'Second': 10,
    'Third': 30
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  initValues,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

export default store