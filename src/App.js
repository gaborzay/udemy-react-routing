import React, {Component} from 'react';
import {Switch, Route, NavLink, Redirect, BrowserRouter} from "react-router-dom";
import './App.css';
import Courses from './components/Courses/Courses';
import Users from './components/Users/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul className="Navigation">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/all-courses">Courses</NavLink></li>
                <li><NavLink exact to="/users">Users</NavLink></li>
              </ul>
            </nav>
          </header>
          <main className="Content">
            <Switch>
              <Route exact path="/" render={() => (<h1>Welcome to my page!</h1>)}/>
              <Route path="/courses" component={Courses}/>
              <Route exact path="/users" component={Users}/>
              <Redirect from="/all-courses" to="/courses"/>
              <Route render={() => (<h1>Page not found!</h1>)}/>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
