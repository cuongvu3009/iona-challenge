import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
