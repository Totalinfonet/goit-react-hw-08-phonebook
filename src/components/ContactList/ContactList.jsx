import { useEffect, useMemo } from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useMemo(() => {
    if (!Array.isArray(contacts)) {
      return [];
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => handleDeleteContact(contact.id)}
        />
      ))}
    </List>
  );
};
