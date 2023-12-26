import { configureStore } from '@reduxjs/toolkit';
import { contactsBookReducer } from './contactsBookSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsBookReducer,
  },
});
