import { Container } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes/router';



function App() {
  return (
    <>
      <div className={'prose max-w-none'}>
        <Container mt="16" maxW="container.sm">
          <RouterProvider {...{router}} />
        </Container>
      </div>
    </>
  );
}

export default App;
