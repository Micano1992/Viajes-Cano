import './App.css';
import { BarraMenu } from './Componentes/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">

      <BarraMenu />

      <ItemListContainer greeting="Página web de turimo argentino" />

    </div>
  );
}

export default App;
