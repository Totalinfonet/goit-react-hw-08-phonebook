import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import { Box, Flex, Spacer } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box bg="gray.500" color="white" py={4} px={8}>
      <Flex alignItems="center">
        <Navigation />
        <Spacer />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </Box>
  );
};
