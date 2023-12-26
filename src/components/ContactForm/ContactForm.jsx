import {
  StyledBtn,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled.js';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'store/operations.js';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);

  const handleInputName = e => {
    setName(e.target.value);
  };
  const handleInputNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`Such a contact already exists!`);
      return;
    }
    dispatch(addContactsThunk({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        {'Name'}
        <StyledInput
          name="name"
          value={name}
          type="text"
          onChange={handleInputName}
          placeholder="name"
          required
        ></StyledInput>
      </StyledLabel>
      <StyledLabel>
        {'Number'}
        <StyledInput
          name="number"
          value={number}
          type="tel"
          onChange={handleInputNumber}
          placeholder="phone number"
          required
        ></StyledInput>
      </StyledLabel>
      <StyledBtn>Add contacts</StyledBtn>
    </StyledForm>
  );
};
