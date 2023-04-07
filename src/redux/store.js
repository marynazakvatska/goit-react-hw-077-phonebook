import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filterSlice";

/* import {
  persistStore, 
   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
}

export const persistedReducer = persistReducer(
    persistConfig,
  combineReducers({
    contacts, 
    filters
}),
    
)


export const store = configureStore({
    reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
            return getDefaultMiddleware({
                 serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
            })
        }
})

export const persistor = persistStore(store) */

export const store = configureStore({
  reducer: {
    contacts: contactsReducer, 
    filters: filtersReducer,
  } 
})