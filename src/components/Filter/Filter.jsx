import {
  StyledInput,
  StyledText,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/contactsBookSlice';
import { selectFilter } from '../../store/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectFilter);
  console.log(search);

  const handleInputChange = e => {
    const inputSearch = setFilter(e.target.value);
    dispatch(inputSearch);
  };
  return (
    <>
      <StyledText>Find contact by name </StyledText>
      <StyledInput
        name="filter"
        value={search}
        onChange={handleInputChange}
        placeholder="Enter name"
      ></StyledInput>
    </>
  );
};
