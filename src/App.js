import React, { Component } from 'react';
import Activities from './component/Activities';
import Navbar from './component/Navbar'

import { BrowserRouter as Router, Route} from 'react-router-dom';



class App extends Component {

  render() {
 

    return (
    <div className="App">
          <h1>App</h1>
          <Router>
            <Route exact path="/" component={Activities} />
          </Router>
    </div>
      
        
        
    );
  }
}


export default App;
