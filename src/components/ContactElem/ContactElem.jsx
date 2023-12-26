import {
  StyledBtn,
  StyledContacts,
} from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from 'store/operations';

export const ContactElem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledContacts>
        {name}: {number}
        <StyledBtn type="button" onClick={() => dispatch(deleteContactsThunk(id))}>
          Delete
        </StyledBtn>
      </StyledContacts>
    </>
  );
};
