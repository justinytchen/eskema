import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import Overview from "./components/Overview";
import { withAuthentication } from './session';
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/LandingPage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      authUser:null
    };
  }

  render(){
    return (
      <Router>
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/board/:id"  component={DashboardPage} />
            <Route path="/overview"  component={Overview} />
            <Route path="/home"  component={LandingPage} />
            <Route path="/about"  component={AboutPage} />
            <Route render={() => <Redirect to={{pathname: "/"}} />} />
            
          </Switch>
        </main>
      </Router>
    );
  }
}

export default withAuthentication(App);
