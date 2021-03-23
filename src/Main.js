import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  HashRouter,
  NavLink
} from 'react-router-dom';

import Navbar from './Components/Navbar/navbar'; 
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import SCP002 from './scp-menu/scp-002';
import SCP003 from './scp-menu/scp-003';
import SCP004 from './scp-menu/scp-004';
import SCP005 from './scp-menu/scp-005';
import SCP006 from './scp-menu/scp-006';

class Main extends Component 
{
         render ()
         {
             return(
                <HashRouter>
                  <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/scp-002">SCP-002</NavLink></li>
                        <li><NavLink to="/scp-003">SCP-003</NavLink></li>
                        <li><NavLink to="/scp-004">SCP-004</NavLink></li>
                        <li><NavLink to="/scp-005">SCP-005</NavLink></li>
                        <li><NavLink to="/scp-006">SCP-006</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/stuff" component={Stuff} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/scp-002" component={SCP002} />
                    <Route path="/scp-003" component={SCP003} />
                    <Route path="/scp-004" component={SCP004} />
                    <Route path="/scp-005" component={SCP005} />
                    <Route path="/scp-006" component={SCP006} />
                  </div>
                 </div>
                </HashRouter>
             );
         }
}

export default Main;