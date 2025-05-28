import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Registerscreen from './screens/Registerscreen';
import Profilescreen from './screens/Profilescreen';
import Loginscreen from './screens/Loginscreen';
import Projecthomescreen from './screens/Projecthomescreen';
import Projects from './screens/Projects';
import Subprojects from './screens/Subprojects';
import Testcases from './components/testCases';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homescreen />} exact />
        <Route path='/login' element={<Loginscreen />} />
        <Route path='/register' element={<Registerscreen />} />
        <Route path='/profile' element={<Profilescreen />} />
        <Route path='/dashboard' element={<Projecthomescreen />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/subprojects/:projectid' element={<Subprojects/>}/>
        <Route path='/testcases/:subprojectid' element={<Testcases/>}/>
      </Routes>
    </Router>
  );
};

export default App;