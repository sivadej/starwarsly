/*
  Redux store
    Configures redux for persistence of state.
    State should persist between browser sessions.

    ./reducers/root should contain combined reducer functions.
    redux-thunk middleware is used to allow async actions.
*/

import  { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import thunk from "redux-thunk";
import root from "./reducers/root";
import { createStore, applyMiddleware } from "redux";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, root);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

export const persistedStore = persistStore(store);