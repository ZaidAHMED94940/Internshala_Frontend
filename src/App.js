
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import EducationProfessionalForm from './component/EducationProfessionalForm';
import InternshalaDetails from './component/InternshalaDetails';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path='/EducationProfessionalForm' element={<EducationProfessionalForm/>}/>
          <Route path='/InternshalaDetails' element={<InternshalaDetails/>}/>
        </Routes>
    </Router>
  );
}

export default App;