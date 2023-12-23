import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contactsList',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    searchContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});
const contactsReduser = contactsSlice.reducer;
export default contactsReduser;
export const { addContact, deleteContacts, searchContacts } =
  contactsSlice.actions;
