import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { chatsReducer } from "./chats/reducer";
import { messageReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import { picsReducer } from "./cats/reducer";

const middlewares = [thunk];

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messageReducer,
    pics: picsReducer,
})

const persistConfig = {
    key: "lesson7hw",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);