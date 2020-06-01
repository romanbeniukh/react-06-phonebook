import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  FILTER_CONTACT,
  RESET_FILTER,
  EDIT_CONTACT,
  SAVE_EDIT_CONTACT,
  CLOSE_EDIT_CONTACT,
  ADD_NOTIFICATION,
  CLOSE_NOTIFICATION,
} from '../constants/ActionTypes';

export const ADD_CONTACT_ACTION = contact => ({
  type: ADD_CONTACT,
  payload: {
    ...contact,
    id: Date.now(),
  },
});

export const REMOVE_CONTACT_ACTION = id => ({
  type: REMOVE_CONTACT,
  payload: { id },
});

export const FILTER_CONTACT_ACTION = name => ({
  type: FILTER_CONTACT,
  payload: name,
});

export const RESET_FILTER_ACTION = () => ({
  type: RESET_FILTER,
});

export const EDIT_CONTACT_ACTION = contact => ({
  type: EDIT_CONTACT,
  payload: contact,
});

export const SAVE_EDIT_CONTACT_ACTION = contact => ({
  type: SAVE_EDIT_CONTACT,
  payload: contact,
});

export const CLOSE_EDIT_CONTACT_ACTION = contact => ({
  type: CLOSE_EDIT_CONTACT,
  payload: contact,
});

export const ADD_NOTIFICATION_ACTION = options => ({
  type: ADD_NOTIFICATION,
  payload: options,
});

export const CLOSE_NONIFICATION_ACTION = () => ({
  type: CLOSE_NOTIFICATION,
});
