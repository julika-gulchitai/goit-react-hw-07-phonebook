import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import {
  Container,
  StyledTitle,
  StyledTitles,
} from './ContactForm/ContactForm.styled';

export const App = () => {

  return (
    <Container>
      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm />
      <StyledTitles>Contacts</StyledTitles>
      <Filter />
      <ContactList />
    </Container>
  );
};
