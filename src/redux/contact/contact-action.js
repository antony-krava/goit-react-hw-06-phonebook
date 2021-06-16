import types from './contact-types';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContacts = createAction(types.ADD, contactFormState => {
  return {
    payload: {
      id: uuidv4(),
      name: contactFormState.name,
      number: contactFormState.number,
    },
  };
});
const deleteContacts = createAction(types.DELETE);
const chengeFilter = createAction(types.CHENGE_FILTER);

export default { addContacts, deleteContacts, chengeFilter };