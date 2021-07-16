import { Redirect, BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Preferences from './Components/Preferences/Preferences';
import Login from './Components/Login/Login';
import useToken from './Token/useToken';


function App() {
  const  { token, setToken } = useToken();

  if(!token) { // if the token is Falsy
    return <Login setToken = {setToken} />
  }
  if(token === true) {
    return <Redirect to='/Dashboard'  />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/Dashboard">
            <Dashboard />
          </Route>
          <Route exact path = "/Preferences">
            <Preferences />
          </Route>
          {/* <Route exact path = "/">
              <Login/>
          </Route> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
