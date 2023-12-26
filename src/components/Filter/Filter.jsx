import {
  StyledInput,
  StyledText,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/contactsBookSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(setFilter);

  const handleInputChange = e => {
    const inputSearch = setFilter(e.target.value);
    console.log(inputSearch);
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
