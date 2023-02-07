import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Router } from './Routes/Routes/Router';


function App() {
  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
