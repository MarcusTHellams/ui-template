import { Heading, Text } from '@chakra-ui/react';

export const Home = () => {
  return (
    <>
      <Heading as="h1">Hello from App</Heading>
      <Heading mt="0" as="h2">
        Hello from h2
      </Heading>
      <Text>Paragraph Text</Text>
      <Text fontFamily="mono">Paragraph Text</Text>
    </>
  );
};
