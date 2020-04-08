import * as React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Screen3 from './Components/Screen3';
import Screen4 from './Components/Screen4';

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
				<React.Fragment>
					<main className="container my-5">
						{/* <h1 className="text-primary text-center">Hello {this.state.name}!</h1> */}
						<h1>Howdy {this.state.name}!</h1>
						<h2>Hoody Hoo!</h2>
					</main>
					<Link to="localhost:3000">Home</Link>
					<Link className="text-center mx-2" to="/Screen3">Screen3</Link>
					<Link to="/Screen4">Screen4</Link>

					<Switch>
						<Route exact path="localhost:3000" />
						<Route exact path="/Screen3" component={Screen3} />
						<Route exact path="/Screen4" component={Screen4} />
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	name: string;
}

export default App;
