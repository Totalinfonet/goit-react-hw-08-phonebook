import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { Li, DeleteButton } from './ContactItem.styled';

export const ContactItem = ({ name, number, onDelete }) => {
  const handleDelete = () => {
    onDelete();
    Notiflix.Notify.warning(`${name} has been removed from contacts.`);
  };

  return (
    <Li>
      {name}: {number}
      <DeleteButton type="button" onClick={handleDelete}>
        Delete
      </DeleteButton>
    </Li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
