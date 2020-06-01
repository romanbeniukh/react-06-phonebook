export const GET_ALL_CONTACTS = state => state.contacts;
export const GET_FILTERED_CONTACTS = state =>
  state.contacts.filter(contact => contact.name.toLowerCase().includes(state.filter.toLowerCase()));
export const GET_FILTER_VALUE = state => state.filter;
export const GET_EDIT = state => state.edit;
