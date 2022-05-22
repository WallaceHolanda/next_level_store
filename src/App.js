import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import CadastroCPF from './components/pages/Cadastro/CadastroCPF';
import CadastroCNPJ from './components/pages/Cadastro/CadastroCNPJ';
import CadastroCNPJP2 from './components/pages/Cadastro/CadastroCNPJP2';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
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

    </Router>
  );
}

export default App;
