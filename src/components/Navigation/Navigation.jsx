import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Flex, Box, Text } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      padding="1rem"
    >
      <Box>
        <NavLink to="/">
          <Text fontSize="lg">Home</Text>
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts">
            <Text fontSize="lg">Contacts</Text>
          </NavLink>
        )}
      </Box>
    </Flex>
  );
};
