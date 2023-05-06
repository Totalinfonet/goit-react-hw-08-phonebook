import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Box, Button, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box p={4} display="inline-flex" alignItems="baseline">
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Welcome, {user.email}
      </Text>
      <Button colorScheme="red" ml={2} onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Box>
  );
};
