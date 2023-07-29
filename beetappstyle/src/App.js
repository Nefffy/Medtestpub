import React, { Component } from 'react' ;
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import SucheAngeklickt from './pages/SucheAngeklickt';



function App() {
  return (
    <div className="App">

      
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path="SucheAngeklickt" element={<SucheAngeklickt />} />
            
          </Route>
        </Routes>
    </div>
  );
}

export default App;

