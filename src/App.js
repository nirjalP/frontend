import React,{Fragment} from 'react';
import Landing from './component/layout/Landing';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';

const App = () => 
  <Router>
   <Fragment>
    <Route exact path='/' component={Landing}/>
    <section className = "container">
      <Switch>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>

      </Switch>

    </section>
   </Fragment>
   </Router>


export default App;
