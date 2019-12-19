import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import FormUser from './components/FormUser';
import Footer from './components/Footer';
import { ThemeProvider } from '@chakra-ui/core';
import customTheme from './theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider>
          <AppNavbar/>
          <Switch>
            <Route path="/" exact component={FormUser}/>
          </Switch>
          <Footer/>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
