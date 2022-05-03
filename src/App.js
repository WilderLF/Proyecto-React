import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <body>

      <div>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer id={3} />
    </div>

    </body>
    
  );
}

export default App;
