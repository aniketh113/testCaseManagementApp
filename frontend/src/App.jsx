import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Registerscreen from './screens/Registerscreen';
import Profilescreen from './screens/Profilescreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homescreen />} exact />
        <Route path='/register' element={<Registerscreen />} />
        <Route path='/profile' element={<Profilescreen />} />
      </Routes>
    </Router>
  );
};

export default App;