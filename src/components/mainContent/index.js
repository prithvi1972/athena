import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../../pages/home';
import { About } from '../../pages/about';
import { Users } from '../../pages/users';

export function MainContent() {
	return (
		<>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/users">
				<Users />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</>
	);
}
