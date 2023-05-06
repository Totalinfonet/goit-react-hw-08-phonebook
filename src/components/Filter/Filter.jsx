import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filter';
import { Input, FormControl, FormLabel } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <FormControl mt={16} mb={8}>
      <FormLabel mb="2" htmlFor="filter">
        Find contacts by name
      </FormLabel>
      <Input
        type="text"
        name="filter"
        placeholder="Search contacts by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </FormControl>
  );
};
