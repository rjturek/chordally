import { applyMiddleware, createStore } from "redux"

import { createLogger } from 'redux-logger'
import thunk from "redux-thunk"
//import promise from "redux-promise-middleware"

//import { reducer } from "./reducers/reducer.js"
import  reducer from "./reducers"

//const middleware = applyMiddleware(promise(), thunk, logger())
// later
// const middleware = applyMiddleware( thunk, createLogger())

//export default createStore(reducer, middleware)
console.log(reducer)
export default createStore(reducer, {numStrings: 3, numFrets: 15})