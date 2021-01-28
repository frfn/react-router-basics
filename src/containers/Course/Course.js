import React, { Component } from "react";

class Course extends Component {
	/* state for the component -- altered in parseQuery() */
	state = {
		courseTitle: "",
	};

	/*** Do in the beginning ***/
	componentDidMount() {
		console.log(this.props);
		this.parseQuery();
	}

	/*** has access to prevProps, prevState, snapshot ***/
	// call this if the props coming in are different from prevProps!
	//
	componentDidUpdate(/* prevProps, prevState, snapshot */) {
		this.parseQuery();
		/*** Example ***/
		// if (this.props.userID !== prevProps.userID) {
		// 	this.fetchData(this.props.userID);
		//   }
	}

	/*** 1st time implementing this, INFINITE NETWORK LOOP: ***/
	// to fix: create 'if' statement in the for loop!
	parseQuery() {
		const query = new URLSearchParams(this.props.location.search); // creates an iterable

		/*** Use 'of' not 'in' ***/
		for (let item of query.entries()) {
			console.log(item);
			if (this.state.courseTitle !== item[1]) {
				this.setState(
					{
						courseTitle: item[1],
					},
					() => {
						console.log(this.state.courseTitle);
					}
				);
			}
		}
	}
	render() {
		const id = this.props.match.params.id;
		const title = this.state.courseTitle;
		// const titleUpdate = title.substring(1).split("%20").join(" ");
		// const id = this.props.location.id;

		let course = <h1>Course invalid, please select a valid course</h1>;
		if (title !== undefined || id !== undefined) {
			course = (
				<div>
					<h1>{this.state.courseTitle}</h1>
					<p>You selected the Course with ID: {id}</p>
				</div>
			);
		}

		return course;
	}
}

export default Course;
