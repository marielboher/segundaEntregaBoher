import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className='container-app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route  path='/category/:categoryName' element={ <ItemListContainer/>}/>
        <Route  path='/products' element={ <ItemListContainer/>} />
      </Routes>
    </div>
  );
}

export default App;