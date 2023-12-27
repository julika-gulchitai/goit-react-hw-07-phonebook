// import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsBook.contacts.items;

export const selectIsLoading = state => state.contactsBook.contacts.isLoading;

export const selectError = state => state.contactsBook.contacts.error;

export const selectFilter = state => state.contactsBook.filter;


