import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteContact } from 'redux/operations';
import css from './ContactItem.module.css'

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));
    return (
        <li key={id} className={css.item}>
            <p className={css.text}>{name} : {number}</p>
            <button className={css.btn} type='button' onClick={handleDelete}>Delete</button>
        </li>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}