import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import './components/Style/ItemCount.css'

function App() {

  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };

  return (
    
    <div className="App">
      <NavBar/>
      <ItemCount onAdd={onAdd} />
      <ItemListContainer  greeting="Motoenvios LM"/>
      
    </div>
  );
}

export default App;
