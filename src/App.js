
//import About from "./components/About";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  const [mode, setMode] = useState('light'); //state variable shows whether dark mode is enable or not
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#03314c';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#99dbe0';
    }

  }
  return (
    <>
   
    <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode}  aboutText="About"/>
   <div className="container my-3">

   {<TextForm heading="Enter the text to analyze below" mode={mode}/>}
   {/*<About />*/}
   </div>
    
 
    </>

  );
}

export default App;
