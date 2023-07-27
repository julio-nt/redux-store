import { RouterProvider } from 'react-router-dom';
import browserRouter from './router/Routes';
import './global.css'

import { styled } from 'styled-components'

const Container = styled.div`
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4rem;
    padding-left: 2rem;
    padding-right: 2rem;
`

function App() {
  return (
    <Container>
      <RouterProvider router={browserRouter} />
    </Container>
  );
}

export default App;
