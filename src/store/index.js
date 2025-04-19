
import {configureStore} from "@reduxjs/toolkit";
import menReducer from './slices/men.slice.js';
import appReducer from './slices/app.slice.js'
import {thunk} from "redux-thunk";
import logger from "redux-logger/src";

export default configureStore({
    reducer: {
        app : appReducer,
        men : menReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger)
})