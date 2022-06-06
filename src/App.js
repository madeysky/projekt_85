import React from 'react';

import Gora from "./komponenty/gora/Gora";
import Login from "./strony/login/Login";
import Napisz from "./strony/napisz/Napisz";
import Pojedynczy from "./strony/pojedynczy/Pojedynczy";
import Ustawienia from "./strony/ustawienia/Ustawienia";
import Zarejestruj from "./strony/zarejestruj/Zarejestruj";
import Domowa from "./strony/domowa/Domowa"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = true;

  return (
    <Router>
      <Gora />
      <Switch>
        <Route exact path="/"><Domowa /></Route>
        <Route path="/login">{user ? <Domowa /> : <Login />}</Route>
        <Route path="/napisz">{user ? <Napisz /> : <Zarejestruj />}</Route>
        <Route path="/ustawienia">{user ? <Ustawienia /> : <Zarejestruj />}</Route>
        <Route path="/zarejestruj">{user ? <Domowa /> : <Zarejestruj />}</Route>
        <Route path="/wpis/:wpisID"><Pojedynczy /></Route>
      </Switch>
    </Router>
  )
}

export default App;
