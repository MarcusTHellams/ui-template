import { Container, Heading, Text } from '@chakra-ui/react';

function App() {
  return (
    <>
      <div className={'prose max-w-none'}>
        <Container mt="16" maxW="container.sm">
          <Heading as="h1">Hello from App</Heading>
          <Heading mt="0" as="h2">Hello from h2</Heading>
          <Text>Paragraph Text</Text>
          <Text fontFamily="mono">Paragraph Text</Text>
        </Container>
      </div>
    </>
  );
}

export default App;
