import { Box, Heading, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box maxW="600px" mx="auto" my="8">
      <Heading
        as="h1"
        size="xl"
        mb="4"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to our phonebook app!
      </Heading>
      <Text fontSize="lg" lineHeight="tall">
        Our phonebook app is designed to make it easy for you to store and
        access all of your important contacts in one convenient location. With
        our user-friendly interface and robust search functionality, you'll
        never have to worry about losing a contact or struggling to find the
        information you need. So why wait? Sign up and start enjoying the
        benefits of streamlined contact management. We can't wait to help you
        stay connected!
      </Text>
    </Box>
  );
};

export default HomePage;
