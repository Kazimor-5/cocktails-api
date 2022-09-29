// ! COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import SingleCocktail from './pages/SingleCocktail/SingleCocktail';
import About from './pages/About/About';
import Error from './pages/Error/Error';
// ! FILES
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cocktail/:id' element={<SingleCocktail />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
