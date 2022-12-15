import { Box, Button, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/operations';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState('');
  const [editNumber, setEditNumber] = useState('');
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  const handleEdit = ({ id, name, number }) => {
    setIsEdit(!isEdit);
    setEditName(name);
    setEditNumber(number);
    if (isEdit) {
      dispatch(
        editContact({ id, data: { name: editName, number: editNumber } })
      );
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setEditName(value);
        break;

      case 'number':
        setEditNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <Box
      component="li"
      key={id}
      sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
    >
      {isEdit ? (
        <Box component="form" sx={{ display: 'flex' }}>
          <TextField
            variant="standard"
            sx={{ mr: 1 }}
            size="small"
            type="text"
            name="name"
            value={editName}
            onChange={handleChange}
          />{' '}
          <TextField
            variant="standard"
            size="small"
            sx={{ mr: 1 }}
            type="tel"
            name="number"
            value={editNumber}
            onChange={handleChange}
          />
          <Button
            type="button"
            onClick={() => handleEdit({ id, name, number })}
          >
            Save
          </Button>
        </Box>
      ) : (
        <>
          <Box sx={{ display: 'flex', flexGrow: 1}}>
            <Typography component="p" sx={{mr: 3}}>{name} :</Typography>
            <Typography component="p">{number}</Typography>
          </Box>
          <>
            <Button
              type="button"
              onClick={() => handleEdit({ id, name, number })}
            >
              Edit
            </Button>
            <Button sx={{color: 'red'}} type="button" onClick={handleDelete}>
              Delete
            </Button>
          </>
        </>
      )}
    </Box>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
