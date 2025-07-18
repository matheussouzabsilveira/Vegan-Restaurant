import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Cardapio from './pages/Cardapio';
import UserList from "./pages/UserList"
import FinalizarPedido from './pages/FinalizarPedido';
import MeuCarrinho from "./pages/MeuCarrinho"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/lista" element={<UserList />} />
          <Route path="/finalizar-pedido" element={<FinalizarPedido />} />
          <Route path="/carrinho" element={<MeuCarrinho />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
