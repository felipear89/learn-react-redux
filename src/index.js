import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const key = 'AIzaSyC5opAdTP49jj4SO8lNedkmP12Y3gEMzt4'

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));
