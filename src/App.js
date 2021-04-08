import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './Containers/HomeScreen/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Containers/Login/Login';
import { auth } from './firebase';

function App() {

  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
        
      }
    })

    return unsubscribe;
    
  }, [])

  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <Login />
          ) : (
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
            </Switch>
          )
        }
      </Router>
    </div>
  );
}

export default App;
