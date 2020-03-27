import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../../pages/home';
import { Portfolio } from '../../pages/portfolio';
import { Interests } from '../../pages/interests';
import { Contact } from '../../pages/contact';
import { Error404 } from '../../pages/error/404';

export function MainContent() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/portfolio" component={Portfolio} />
			<Route path="/interests" component={Interests} />
			<Route path="/contact" component={Contact} />
			<Route path="*" component={Error404} />
		</Switch>
	);
}
