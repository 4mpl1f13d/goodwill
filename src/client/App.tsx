import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import CheckOut from './Components/CheckOut';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			name: null
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/hello');
			let name = await r.json();
			this.setState({ name });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (

			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/checkout" component={CheckOut} />
				</Switch>
			</Router>
		);
	}
}

export interface IAppProps { }

export interface IAppState {
	name: string;
}

export default App;
