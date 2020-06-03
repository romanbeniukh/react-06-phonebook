import { createSelector } from 'reselect';

export const GET_ALL_CONTACTS = state => state.contacts;
export const GET_FILTER_VALUE = state => state.filter;
export const GET_EDIT = state => state.edit;
export const GET_CONTACTS_LENGTH = state => state.contacts.length;

export const GET_FILTERED_CONTACTS = createSelector([GET_ALL_CONTACTS, GET_FILTER_VALUE], (contacts, filter) =>
  contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())),
);
