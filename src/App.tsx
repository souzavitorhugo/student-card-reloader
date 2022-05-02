
import React from 'react';
import Login from './view/login';
import Home from './view/home';
import Menu from './components/navigation';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/login" element={<Login/>}/>

        <Route path="/navigation" element={<Menu/>}/>

        <Route path="/" element={<Home/>}/>

      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
