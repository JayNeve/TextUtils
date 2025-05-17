import "./App.css";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
// import About from "./components/about";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
// import About from "./components/about";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    // console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#04235c'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")

    }
  }
  return (
    <>
    <div>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
            <Alerts alert={alert}/>
            {/* <About/> */}
            <div className="container my-3">
                  <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
            </div>
    </div>
    </>
  );
}

export default App;

// Last edited {(09/06/2024):(9:22 pm)}
//WRAPED UP