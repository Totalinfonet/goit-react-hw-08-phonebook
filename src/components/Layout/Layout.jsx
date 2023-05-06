import { Box } from '@chakra-ui/react';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box
      bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
      minH="100vh"
      px="4"
    >
      <AppBar />
      <Outlet />
    </Box>
  );
};
