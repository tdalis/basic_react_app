import React from 'react';
// import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Home';
import { Resume } from './Resume';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import "./assets/FontAwesomeIcons";


function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </React.Fragment>
  );
}

export default App;
