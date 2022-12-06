import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import css from './ContactList.module.css'

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={css.contact__list}>
      {filteredContacts().map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          name={name}
          number={phone}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
    user: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
}

// console.log();