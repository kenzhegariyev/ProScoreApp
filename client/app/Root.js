import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory }  from 'react-router';
import App from './App';
import configureStore from './configureStore';
import HomePage from '../homePage';
import AdminPage from '../pages/admin';
import SignupPage from '../signupPage/signupPage';




const Signup = () => <div>Signup</div>;


const Root = () => (
<Provider store={configureStore()}>
	<Router history={hashHistory}>
	     <Route component={App}>
			  <Route path="/" component={HomePage} />
			  <Route path="/signup" component={SignupPage} />
			  <Route path="admin(/:type)" component={AdminPage} />
	    </Route>
  </Router>
</Provider>
);


export default Root;
