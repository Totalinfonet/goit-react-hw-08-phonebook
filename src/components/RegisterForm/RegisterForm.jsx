import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box maxW="md" mx="auto" mt="8">
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl id="name" isRequired>
          <FormLabel>Username</FormLabel>
          <Input type="text" name="name" />
        </FormControl>
        <FormControl mt="4" id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" />
        </FormControl>
        <FormControl mt="4" id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" />
        </FormControl>
        <Button type="submit" mt="4" colorScheme="blue">
          Register
        </Button>
      </form>
    </Box>
  );
};
