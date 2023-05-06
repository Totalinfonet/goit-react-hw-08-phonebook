// import { AuthNav } from 'components/AuthNav/AuthNav';
// import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';
// import { useAuth } from '../../hooks/useAuth';

// export const AppBar = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <header>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// };

import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import { Box, Flex, Spacer } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box bg="gray.600" color="white" boxShadow="2xl" py={4} px={8}>
      <Flex alignItems="center">
        <Navigation />
        <Spacer />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </Box>
  );
};
