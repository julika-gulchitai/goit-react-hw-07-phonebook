import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  fetchContactsThunk,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    error: null,
    isLoading: false,
  },
  filter: '',
};
const handlepending = state => {
  state.contacts.error = null;
  state.contacts.isLoading = true;
};

const handlefulfilled = state => {
  state.contacts.error = null;
  state.contacts.isLoading = false;
};

const handlerejected = (state, action) => {
  state.contacts.error = action.payload;
  state.contacts.isLoading = false;
};
export const contactsBookSlice = createSlice({
  name: 'contactsBook',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, handlepending)
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        handlefulfilled(state);
        state.contacts.items = action.payload;
      })
      .addCase(fetchContactsThunk.rejected, handlerejected)
      .addCase(addContactsThunk.pending, handlepending)
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        handlefulfilled(state);
        state.contacts.items.push(action.payload);
      })
      .addCase(addContactsThunk.rejected, handlerejected)
      .addCase(deleteContactsThunk.pending, handlepending)
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        handlefulfilled(state);
        const i = state.contacts.items.findIndex(
          contact => contact.id === action.payload
        );
        state.contacts.items.splice(i, 1);
      })
      .addCase(deleteContactsThunk.rejected, handlerejected);
  },
});
export const contactsBookReducer = contactsBookSlice.reducer;
export const { setFilter } = contactsBookSlice.actions;
