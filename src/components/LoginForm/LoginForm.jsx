import { Input, Button, FormControl, FormLabel, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box maxW="md" mx="auto" mt="8">
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl mt="4" id="email" isRequired>
          <FormLabel>Email:</FormLabel>
          <Input type="email" name="email" />
        </FormControl>
        <FormControl mt="4" id="password" isRequired>
          <FormLabel>Password:</FormLabel>
          <Input type="password" name="password" />
        </FormControl>
        <Button type="submit" mt="4" colorScheme="blue">
          Log In
        </Button>
      </form>
    </Box>
  );
};
