import './App.css';
import { BarraMenu } from './Componentes/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ItemDetalleContainer } from './Componentes/ItemDetalleContainer/ItemDetalleContainer'
import Cart from './Componentes/Cart/Cart';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <BarraMenu />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Página web de turimo argentino"> </ItemListContainer>}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/paquetes" element={<ItemListContainer greeting="Página web de turimo argentino"> </ItemListContainer>}></Route>
          <Route path="/paquetes/:catId" element={<ItemListContainer greeting="Página web de turimo argentino"> </ItemListContainer>}></Route>
          <Route path="/detalle/:itemId" element={<ItemDetalleContainer> </ItemDetalleContainer>}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>

        </Routes>

      </BrowserRouter >

    </div >
  );
}

export default App;
