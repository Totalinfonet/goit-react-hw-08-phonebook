import { useDispatch, useSelector } from 'react-redux';
import { FilterLabel, FilterInput } from './Filter.styled';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filter';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        placeholder="Search contacts by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterLabel>
  );
};
