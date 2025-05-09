import{applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { thunk} from "redux-thunk"
import {imageReducer} from "./Image/Reducer"

const rootReducers = combineReducers({
    image:imageReducer
})
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk)) 