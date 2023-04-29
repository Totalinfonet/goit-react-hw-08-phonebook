import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts';
import filterReducer from './filter';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
