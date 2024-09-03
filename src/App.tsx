import { RouterProvider } from 'react-router-dom';
import Router from './router/Router';
import './assets/fonts/fonts.css';
import './App.css';

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
