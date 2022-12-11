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
      dispatch(editContact({id, data: {name: editName, number: editNumber}}))
    }
  }

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
    <>
      {isEdit ? (
        <li key={id} className={css.item}>
          <form>
            <input
              type="text"
              value={editName}
              name="name"
              onChange={handleChange}
            />{' '}
            <input
              type="text"
              value={editNumber}
              name="number"
              onChange={handleChange}
            />
          </form>
        </li>
      ) : (
        <li key={id} className={css.item}>
          <p className={css.text}>
            {name} : {number}
          </p>
        </li>
      )}
      <button
        className={css.btn}
        type="button"
        onClick={() => handleEdit({ id, name, number })}
      >
        {isEdit ? <>Save</> : <>Edit</>}
      </button>
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
