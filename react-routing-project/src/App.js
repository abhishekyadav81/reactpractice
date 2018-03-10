import React, { Component } from 'react';
import logo from './logo.svg';

import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import User from './components/users'
import FormCode from './components/formcode'

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import './App.css';

const history=createBrowserHistory();



class App extends Component {
  render() {
    return (
      
      <Router>
      <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
            <li> <Link to="/">Home </Link></li>
            <li> <Link to="/about">About </Link> </li>
            <li> <Link to="/contact">Contact </Link> </li>
            <li> <Link to="/contactform">Contact Form</Link> </li>
            <li> <Link to={"/user/"+10}>User </Link> </li>
                
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">


                  <li role="separator" className="divider"></li>
                  <li className="dropdown-header">Nav header</li>
                  
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="./">Default <span className="sr-only">(current)</span></a></li>
              <li><a href="../navbar-static-top/">Static top</a></li>
              <li><a href="../navbar-fixed-top/">Fixed top</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact} history={history}/>
          <Route path='/user/:id' component={User} />
          <Route path='/contactform' component={FormCode} />          
          
          
      </div> 
      </Router>

      /*<Router>
        
        <div>
        <ul>
          <li> <Link to="/"  >Home </Link></li>
          <li> <Link to="/about"  >About </Link> </li>
        </ul>
        <hr />

          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          </div>
        </Router>*/

    );
  }
}

export default App;
