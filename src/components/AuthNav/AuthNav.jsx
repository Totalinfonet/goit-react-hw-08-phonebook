import { NavLink } from 'react-router-dom';
import { Stack, Text } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Stack direction="row" spacing={4}>
      <NavLink
        to="/register"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? 'bold' : '',
            color: isActive ? 'red' : 'white',
          };
        }}
      >
        <Text fontSize="lg">Register</Text>
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? 'bold' : '',
            color: isActive ? 'red' : 'white',
          };
        }}
      >
        <Text fontSize="lg">LogIn</Text>
      </NavLink>
    </Stack>
  );
};
