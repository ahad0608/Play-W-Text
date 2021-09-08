import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null);

  const showalert = (message, type)=>{
    setalert({
      msg : message,
      type : type,
    })
    setTimeout(() => {
      setalert(null);
      
    }, 1500);
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#2a2828";
      showalert("Dark Mode has been enabled", "success");
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showalert("Light Mode has been enabled","success");
      
    }
  }
  return (
   <>
   



  <Router>

<Navbar title="Play-W-Text" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
  <div className="container my-3">
  <Switch>
    <Route exact path="/about">  {/*exact path is used for complete matching instead of partial matching for future purposes*/}
        <About mode={mode} />
    </Route>
    
     <Route exact path="/">
       <Textform heading="Text-Area" mode={mode} showalert={showalert}/>
    </Route>
</Switch>

</div>
  </Router>





   </>
  );
}

export default App;
