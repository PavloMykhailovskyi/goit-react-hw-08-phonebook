
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { selectContacts } from "redux/selectors";
import css from './ContactForm.module.css'

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const checkContactName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkContactName) {
      return alert(`${name} is already in contacts!`);
    }
    
    const data = { name, phone };
    dispatch(addContact(data));
    setName('');
    setPhone('');
  }

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name" className={css.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <label htmlFor="number" className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

// console.log();