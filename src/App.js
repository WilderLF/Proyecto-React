import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:envioId' element={<ItemListContainer/>} />
      <Route path='/item/:productId' element={<ItemDetailContainer id/>} /> 
      <Route path='/cart/'/>
      
    </Routes>
    </BrowserRouter>
    /*
    <body>

      <div>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer id={3} />
    </div>

    </body>
   */
  );
}

export default App;
