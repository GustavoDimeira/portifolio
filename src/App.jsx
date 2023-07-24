import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Navegation, About, Skills, Login, Register, ProductsSell, Footer
} from "./components";
import { useState } from 'react';

function App() {
  const [selected, changeSelected] = useState(7);

  return (
    <div className={ `container link-${selected}` }>
      <BrowserRouter>
        <div className="content-wrapper">
          <div className={ `nav-container page-${selected}` }>
            <Navegation selected={ selected } changeSelected={ changeSelected }/>
          </div>
          <div className="main-content">
            <Routes>
              <Route path='/projects' element={ <About /> } />
              <Route path='/about' element={ <About /> } />
              <Route path='/skills' element={ <Skills /> } />
              <Route path='/exemples'>
                <Route path='/exemples/login' element={ <Login /> } />
                <Route path='/exemples/register' element={ <Register /> } />
                <Route path='/exemples/products' element={ <ProductsSell /> } />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Footer selected={ selected }/>
    </div>
  );
}

export default App;
