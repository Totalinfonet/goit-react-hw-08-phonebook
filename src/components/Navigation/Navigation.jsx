import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Flex, Text } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex as="nav" alignItems="center" padding="1rem">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? 'bold' : '',
            color: isActive ? 'blue' : 'white',
          };
        }}
      >
        <Text fontSize="lg" mr="1rem">
          Home
        </Text>
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              color: isActive ? 'blue' : 'white',
            };
          }}
        >
          <Text fontSize="lg" mr="1rem">
            Contacts
          </Text>
        </NavLink>
      )}
    </Flex>
  );
};
