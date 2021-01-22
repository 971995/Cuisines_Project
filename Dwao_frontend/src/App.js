import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Account from './pages/Account';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Login" exact="true">
            <Login />
          </Route>
          <Route path="/" exact="true">
            <Home />
          </Route>
          <Route path="/Products" exact="true">
            <Products />
          </Route>
          <Route path="/Account" exact="true"><Account /></Route>
        </Switch>
      </Router> 
    {/* <div className="App">
      <Header />
      <Home_Products />
      <Footer />
    </div> */}
    </>
  );
}
export default App

