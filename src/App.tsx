import { Container, Heading } from '@chakra-ui/react';

function App() {
  return (
    <>
      <div className={'prose container mx-auto mt-16'}>
        <h1>Hello from App.</h1>
      </div>
      <Container mt="16" maxW="container.sm">
        <Heading as="h1">Hello from App</Heading>
      </Container>
    </>
  );
}

export default App;
