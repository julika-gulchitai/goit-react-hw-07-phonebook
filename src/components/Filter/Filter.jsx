import {
  StyledInput,
  StyledText,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { searchContacts } from 'store/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const inputSearch = searchContacts(e.target.value);

    dispatch(inputSearch);
  };
  return (
    <>
      <StyledText>Find contact by name </StyledText>
      <StyledInput
        name="filter"
        // value={filter}
        onChange={handleInputChange}
        placeholder="Enter name"
      ></StyledInput>
    </>
  );
};
