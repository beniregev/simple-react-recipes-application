import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/HomePage';
import { RecipesPage } from './pages/HomePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: null,
    };
  }
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/recipes">
          <RecipesPage />
        </Route>
      </Switch>
    );
  }
}

export default App;
