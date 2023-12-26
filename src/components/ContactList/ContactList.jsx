import { useSelector } from 'react-redux';
import { ContactElem } from 'components/ContactElem/ContactElem';
import { StyledContactsList } from 'components/ContactForm/ContactForm.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase() || '')
  );

  return (
    <>
      {filteredContacts.length === 0 ? (
        <p>There is no such contact. Please enter another name</p>
      ) : (
        <ul>
          <StyledContactsList>
            {filteredContacts.map(contact => (
              <ContactElem key={contact.id} {...contact} />
            ))}
          </StyledContactsList>
        </ul>
      )}
    </>
  );
};
