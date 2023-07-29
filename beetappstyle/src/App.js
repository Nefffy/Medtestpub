import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import { PropData } from "./index";
import "./App.css";
import HomeNotClicked from "./components/HomeNotClicked";
import Homepage from "./pages/Homepage";




class App extends Component{
  render(){
      return(
          <Router>
              <Switch>               
                  <Route exact path="/" component={Homepage}/>
              </Switch>
          </Router>
      ) 
   }
}



export default App;


