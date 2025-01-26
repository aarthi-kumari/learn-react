import './index.css';
import About from "./components/About";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
//  import ReactDOM from "react-dom/client";
  import {
   BrowserRouter as Router,
  Routes,
    Route,
  
 } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //state variable shows whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=> {
        setAlert(null);
      },2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#03314c';
      showAlert("Dark mode has been enabled", "success");
      //document.title = 'TextUtils - Dark Mode';
      // setInterval(()=> {
      //   document.title = 'TextUtils is Amazing Mode'
      // },2000);
      // setInterval(()=> {
      //   document.title = 'Install TextUtils Now';
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      //document.title = 'TextUtils - Light Mode';
    }

  }
  return (
    <>
     <Router> 
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
    <Alert alert={alert}/>
   <div className="container my-3">



    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />  
         
       <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>} /> 


          {/*<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>*/}
         
           </Routes> 


      </div>
    </Router> 
  
     
    
 
    </>

  );
}

export default App;
