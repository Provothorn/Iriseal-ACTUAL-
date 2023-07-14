import React from 'react';
import ReactDOM from 'react-dom';
// import { ThirdwebProvider } from "@thirdweb-dev/react";
import './home.css';
import './login.css';




import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Loginpage from './pages/login';
import Signuppage from './pages/signup';
import Homepage from './pages/home';
import SignDocs from './pages/SignDocs';
import Verify from './pages/Verify';





function App() {
  return (

    
    <Router>
      
      <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/signuppage" element={<Signuppage />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/singDocs" element={<SignDocs />} />
      
      
      </Routes>
     
    </Router>


  );
}

ReactDOM.render(<App />, document.getElementById('root'));