import React,{Fragment} from 'react';
import Landing from './component/layout/Landing';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Alert from './component/layout/Alert';

//Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';


const App = () => 
 { return (
   //<Provider store={store}>
  <Router>
   <Fragment>
    <Route exact path='/' component={Landing}/>
      <section className = "container">
        <Alert />
        <Switch>
         <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </section>
   </Fragment>
   </Router>
  // </Provider>
 );
}

export default App;
