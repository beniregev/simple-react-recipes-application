import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RecipesPage } from './pages/RecipesPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: null,
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.setState({ activeUser: null });
  }

  render() {
    const { activeUser } = this.state;

    return (
      <Switch>
        <Route exact path="/">
          <HomePage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/recipes">
          <RecipesPage activeUser={activeUser} handleLogout={this.handleLogout} />
        </Route>
      </Switch>
    );
  }
}

export default App;
