import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import ListCourseComponent from './components/ListCourseComponent';
import ListStudentComponent from './components/ListStudentComponent';
import FooterComponent from './components/FooterComponent';

import Navbar from "./Navigation/Navbar.js";

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
              <Navbar />
                <div className="container">
                    <Switch>
                         <Route path = "/" exact component = {ListCourseComponent}></Route>
                         <Route path = "/students" exact component = {ListStudentComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>

  );
}
export default App;