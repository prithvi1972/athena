import React, { useState } from 'react';
import Home from './pages/home';
import { StoreContext } from './store';

function App() {
	const [store, setStore] = useState({
		selectedEntityId: null,
		youtubePlayer: { visible: false, url: null },
	});

	return (
		<StoreContext.Provider value={{ store, setStore }}>
			<Home />
		</StoreContext.Provider>
	);
}

export default App;
