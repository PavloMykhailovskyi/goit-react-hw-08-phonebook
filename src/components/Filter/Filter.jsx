import { Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Box>
      <TextField
        variant='standard'
        label="Find contacts by name"
        value={filter}
        onChange={handleFilter}
      />
    </Box>

  );
};
