// import Notiflix from 'notiflix';
// import PropTypes from 'prop-types';

// export const ContactItem = ({ name, number, onDelete }) => {
//   const handleDelete = () => {
//     onDelete();
//     Notiflix.Notify.warning(`${name} has been removed from contacts.`);
//   };

//   return (
//     <li>
//       {name}: {number}
//       <button type="button" onClick={handleDelete}>
//         Delete
//       </button>
//     </li>
//   );
// };

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { Box, Text, Button } from '@chakra-ui/react';

export const ContactItem = ({ name, number, onDelete }) => {
  const handleDelete = () => {
    onDelete();
    Notiflix.Notify.warning(`${name} has been removed from contacts.`);
  };

  return (
    <Box
      borderBottom="1px"
      borderColor="gray.200"
      paddingY={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontWeight="bold">
        {name}: {number}
      </Text>
      <Button colorScheme="red" size="sm" onClick={handleDelete}>
        Delete
      </Button>
    </Box>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
