import React, { Component } from "react";

import Aux from "./containers/HOC/Aux";
import NoMatch from "./component/NoMatch/NoMatch";
// import Course from './containers/Course/Course'
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import {
	BrowserRouter,
	Switch,
	Route,
	NavLink,
	Redirect,
} from "react-router-dom";
import "./App.css";

/* got a problem in Course, where if I click the posts, the TITLE would not change */
// To fix: instead of using componentDidMount, use componentDidUpdate

class App extends Component {
	render() {
		return (
			<BrowserRouter basename="/flexers-app/">
				<Aux>
					<header className="Links">
						<nav>
							<ul>
								<li>
									<NavLink to="/home/">Home</NavLink>
								</li>{" "}
								|&nbsp;
								<li>
									<NavLink to="/users/">Users</NavLink>
								</li>{" "}
								|&nbsp;
								<li>
									<NavLink to="/courses">Courses</NavLink>
								</li>
							</ul>
						</nav>
					</header>

					{/* Order MATTERS for the route. */}
					{/* Debug why courses/id was NOT working, had to put it on top. */}
					<Switch>
						<Route
							path="/home/"
							exact
							render={() => (
								<h1 style={{ color: "lightblue" }}>Home</h1>
							)}
						/>
						<Route path="/users/" component={Users} />

						<Route path="/courses" component={Courses} />
						<Redirect from="/all-courses" to="/courses" />
						{/* <Redirect from='/' to='/' /> */}

						{/* Must be the last route in the switch order because it catches everything */}
						<Route component={NoMatch} />
					</Switch>
				</Aux>
			</BrowserRouter>
		);
	}
}

export default App;
