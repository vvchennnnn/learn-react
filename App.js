import React from 'react';
import Header from './app/Header';
import Page from './app/Page';
import Footer from './app/Footer';

// 当我在代码中需要一个地方去持久化保存可更改的值的时候，用class component
class App extends React.Component {
	constructor(props) {
		super(props);

		// 通过声明state来持久化保存状态
		this.state = {
			page: 'HOME',
		}

		// 无论caller是谁，都指向app的this
		this.handlePageChange = this.handlePageChange.bind(this);
	}

	handlePageChange(newPage) {
		this.setState({
			page: newPage,
		});
	}

	render() {
		const { page } = this.state;
		return (
			<div className="main">
				<div className="container">
					<Header 
					onPageChange = {this.handlePageChange}
					page={page} 
					/>
					<Page page={page} />
					<Footer />
				</div>
			</div>
		)
	}
}


// 函数返回JSX片段，这就是functional component
// const App = () => {
// 	const page = 'HOME';
// 	return (
// 		<div className="main">
// 			<div className="container">
// 				<Header page={page} />
// 				<Page page={page} />
// 				<Footer />
// 			</div>
// 		</div>
// 	)
// };

export default App;