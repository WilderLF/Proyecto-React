import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1 className="text-3xl font-bold underline">Hola Mi tutorsito de React </h1>
      <ItemListContainer  greeting="Motoenvios LM"/>
      <ItemCount/>
    </div>
  );
}

export default App;
