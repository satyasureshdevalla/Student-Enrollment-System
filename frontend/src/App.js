import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import ListCourseComponent from './components/ListCourseComponent';
import ListStudentComponent from './components/ListStudentComponent';
import ListAdminComponent from './components/ListAdminComponent';
import ListDropComponent from './components/ListDropComponent';
import ListEnrollComponent from './components/ListEnrollComponent';
import ListInstructorComponent from './components/ListInstructorComponent';
import ListRoomComponent from './components/ListRoomComponent';
import ListSectionComponent from './components/ListSectionComponent';
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
                         <Route path = "/admins" exact component = {ListAdminComponent}></Route>
                         <Route path = "/drops" exact component = {ListDropComponent}></Route>
                         <Route path = "/enrolls" exact component = {ListEnrollComponent}></Route>
                         <Route path = "/instructors" exact component = {ListInstructorComponent}></Route>
                         <Route path = "/rooms" exact component = {ListRoomComponent}></Route>
                         <Route path = "/sections" exact component = {ListSectionComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>

  );
}
export default App;