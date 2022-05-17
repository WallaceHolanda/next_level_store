import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import CadastroCPF from './components/pages/Cadastro/CadastroCPF';

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
    </Router>
  );
}

export default App;
