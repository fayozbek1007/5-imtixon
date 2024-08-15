import './App.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Registratsiya from './Pages/Registratsiya/Registratsiya';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registratsiya />} />
        <Route path='/registratsiya' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
