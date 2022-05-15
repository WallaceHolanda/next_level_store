import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/">Venda na Next Level</Link>
        <Link to="/">Ofertas do Dia</Link>
        <Link to="/">Celulares</Link>
        <Link to="/">Tv e Vídeo</Link>
        <Link to="/">Informática</Link>
      </ul>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>

    </Router>
  );
}

export default App;
