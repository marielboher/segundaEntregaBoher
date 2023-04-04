import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';


function App() {
  return (
    <div className='container-app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route  path='/category/:categoryName' element={ <ItemListContainer/>}/>
        <Route  path='/products' element={ <ItemListContainer/>} />
        <Route  path='/cart' element={ <Cart/>} />
      </Routes>
    </div>
  );
}

export default App;