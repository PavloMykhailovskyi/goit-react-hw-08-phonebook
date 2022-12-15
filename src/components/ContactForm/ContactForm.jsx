import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { matchIsValidTel, MuiTelInput } from 'mui-tel-input';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        const isValid = matchIsValidTel(value);
        if (isValid) {
          setNumber(value);
        }
        
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

    const data = { name, number };
    dispatch(addContact(data));
    setName('');
    setNumber('');
  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              required
              onChange={handleChange}
              fullWidth
              label="Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              fullWidth
              label="Number"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 4 }}>
          Add contact
        </Button>
      </form>
    </Box>
  );
};
