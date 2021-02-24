import { createStore } from 'redux';
import reducers from './reducer';
// import {  } from "module";
// const middleware = createSagaMiddleware(options)
// middleware.run(saga, ...args)

const store = createStore(reducers)

export default store