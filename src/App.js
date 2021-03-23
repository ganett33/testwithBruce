import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  HashRouter,
  NavLink
} from 'react-router-dom';

import Header from './Header';
import Stuff from './Stuff';
import SCP002 from './scp-menu/scp-002';
import Navbar from 'Navbar'

class App extends Component
{
  render()
  {
    return (
      <HashRouter>
          <div>          
                <h1>SCP</h1>
                    <ul className="header">
                        <li><NavLink exact to="/header">Home</NavLink></li>
                        <li><NavLink exact to="/scp-002">SCP-002</NavLink></li>
                        <li><NavLink exact to="/scp-003">SCP-003</NavLink></li>
                        <li><NavLink exact to="/scp-004">SCP-004</NavLink></li>                         
                    </ul>
                  <div className="content">
                      <Route exact path="./" component={Header} />
                      <Route path="/stuff" component={Stuff} />
                      <Route path="/scp-002" component={SCP002} />
                    </div>
                   </div>
          <Redirect to="/" />
     </HashRouter>
    
      );
    }
}




export default App;
