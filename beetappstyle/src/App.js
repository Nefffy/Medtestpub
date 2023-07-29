import React, { Component } from 'react' ;
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' component={Homepage} />
        </div>
      </Router>
    );
  }
}





export default App;


