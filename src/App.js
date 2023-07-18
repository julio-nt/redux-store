import { RouterProvider } from 'react-router-dom';
import browserRouter from './router/Routes';
import './global.css'

function App() {
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
