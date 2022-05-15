import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';

import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>

    </Router>
  );
}

export default App;
