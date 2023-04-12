import { configureStore } from "@reduxjs/toolkit";
import getMainTypeReducer from "./home_MainType/reducer";
import rootReducer from "./rootReducers";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./saga";
import { composeWithDevTools } from "redux-devtools-extension";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

export default store



















// ########################## OLD #############################

// const extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = configureStore({
//     reducer: {
//         Reducer: Reducer,
//     },
//     extension
// }, applyMiddleware(sagaMiddleware))