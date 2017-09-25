import React, { component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import Page from './Page';

ReactDOM.render((
		<Router history = {browserHistory}>
	       <Route path = "/" component = {App} />
	       <Route path = "/Page" component = {Page} />
	    </Router>
),document.getElementById('root'));