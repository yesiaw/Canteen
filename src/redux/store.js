import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import ExampleReducer from "./reducers/example-reducer";

let redusers = combineReducers({
    // ExamplePage: ExampleReducer

})

let store = createStore(redusers, applyMiddleware(thunkMiddleware) )

export default store;