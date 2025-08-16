import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type    
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title = "TextUtils - Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - Light Mode";
      showAlert("Light mode has been enabled", "success");
    }
  } 
  
  
  return (
    <>
     <Router>
        <Navbar title="React" home="HomePage" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analysis"/>} />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
