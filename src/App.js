import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import DashboardViewer from "./components/DashboardViewer";
import LandingPage from "./components/LandingPage";
import Overview from "./components/Overview";

class App extends Component{
  render(){
    const name = 'John Doe'
    const isAuthenticated = true
    return (
      <Router>
        <main>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/board/:id"  component={DashboardViewer} />
            <Route path="/overview"  component={Overview} />
            <Route render={() => <Redirect to={{pathname: "/"}} />} />
            
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
