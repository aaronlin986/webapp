import logo from './logo.svg';
import './App.css';
import Admin from './components/Admin';
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link, Redirect,
} from 'react-router-dom';
import adminAPI from './services/Admin'


function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    adminAPI.verifyAdmin().then((result) => {
      if (result.error) {
  
      } 
      if (result.ok) {
        setIsAdmin(result.IsAdmin);
      }
    })
  });
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
