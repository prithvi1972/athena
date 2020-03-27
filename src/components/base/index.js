import React from 'react';
import { Navigation } from '../navigation';
import { MainContent } from '../mainContent';

export function Base() {
	return (
		<div>
			Base component
			<MainContent />
			<Navigation />
		</div>
	);
}
