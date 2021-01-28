import React, { Component } from "react";

import Course from "../Course/Course";
import "./Courses.css";
import { Link, Route, Switch, Redirect } from "react-router-dom";

class Courses extends Component {
	state = {
		courses: [
			{ id: 1, title: "Angular - The Complete Guide" },
			{ id: 2, title: "Vue - The Complete Guide" },
			{ id: 3, title: "PWA - The Complete Guide" },
		],
	};

	/* test purposes */
	// componentDidMount() {
	// 	console.log(this.props);
	// }

	/* Instead of Links, I want to navigate programmatically EDIT: There's a bug... we'll use links. */
	// clickHander = (id) => {
	// 	this.props.history.push({
	// 		pathname: "/courses/" + id,
	// 	});
	// };

	render() {
		return (
			<div>
				<h1>Amazing Udemy Courses</h1>
				<section className="Courses">
					{this.state.courses.map((course) => {
						return (
							<Link
								/* This is how you can pass information  */
								key={course.id}
								to={{
									pathname:
										this.props.match.url + "/" + course.id, // + '/' + course.title
									// id: course.id,

									/* this is the proper syntax for search: ?name= */
									search: "?title=" + course.title,
									// title: course.title,
								}}
							>
								<article
									key={course.id}
									// onClick={() => this.clickHander(course.id)}
									className="Course"
								>
									{course.title}
								</article>
							</Link>
						);
					})}
				</section>
				<Switch>
					{/* Notice .../:id/:title was done before this, this creates TWO params props */}
					{/* <Route path={this.props.match.url + "/course/:id/:title"} component={Course} /> */}
					<Route
						path={this.props.match.url + "/:id"}
						component={Course}
					/>
				</Switch>
			</div>
		);
	}
}

export default Courses;
