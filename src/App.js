import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import CadastroCPF from './components/pages/Cadastro/CadastroCPF';
import CadastroCNPJ from './components/pages/Cadastro/CadastroCNPJ';
import CadastroCNPJP2 from './components/pages/Cadastro/CadastroCNPJP2';
import CadastroCNPJP3 from './components/pages/Cadastro/CadastroCNPJP3';
import Produto from './components/pages/Produto/Produto';
import Carrinho from './components/pages/Carrinho/Carrinho';
import Pagamento from './components/pages/Pagamento/Pagamento';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>

      <Routes>
        <Route path='/visualizarproduto' element={<Produto/>}/>
      </Routes>

      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>

      <Routes>
        <Route path='/cadastrocpf' element={<CadastroCPF/>}/>
      </Routes>

      <Routes>
        <Route path='/cadastrocnpj' element={<CadastroCNPJ/>}/>
      </Routes>

      <Routes>
        <Route path='/cadastrocnpjp2' element={<CadastroCNPJP2/>}/>
      </Routes>

      <Routes>
        <Route path='/cadastrocnpjp3' element={<CadastroCNPJP3/>}/>
      </Routes>

      <Routes>
        <Route path='/carrinho' element={<Carrinho/>}/>
      </Routes>

      <Routes>
        <Route path='/pagamento' element={<Pagamento/>}/>
      </Routes>
    </Router>
  );
}

export default App;
