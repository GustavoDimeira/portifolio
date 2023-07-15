import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Navegation,
  About,
} from "./pages";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegation className="nav" />
        <div className="content">
          <Routes>
            <Route path='/about' element={ <About /> } />
            <Route path='/projects' element={ <About /> } />
            <Route path='/skills' element={ <About /> } />
            <Route path='/exemples'>
              <Route path='/exemples/login' element={ <About /> } />
              <Route path='/exemples/register' element={ <About /> } />
              <Route path='/exemples/products' element={ <About /> } />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
