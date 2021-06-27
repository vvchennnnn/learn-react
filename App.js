import React from 'react';
import Header from './app/Header';
import Page from './app/Page';
import Footer from './app/Footer';

// 函数返回JSX片段，这就是functional component
const App = () => {
	const page = 'SERVICES';

	return (
		<div className="main">
			<div className="container">
				<Header page={page} />
				<Page page={page} />
				<Footer />
			</div>
		</div>
	)
};

export default App;