import {
  StyledBtn,
  StyledContacts,
} from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'store/contactsSlice';

export const ContactElem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledContacts>
        {name}: {number}
        <StyledBtn type="button" onClick={() => dispatch(deleteContacts(id))}>
          Delete
        </StyledBtn>
      </StyledContacts>
    </>
  );
};
