import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './pages/register/register'
import List from './pages/list/list';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact={true} component={Register} />
				<Route path='/list' component={List} />
			</Switch>
		</BrowserRouter>
	);

}

export default Routes;
