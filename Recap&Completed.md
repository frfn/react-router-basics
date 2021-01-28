# Router-Recapped and Completed.

Takeaways by File:

<br>

## `index.js`

-   Just a `ReactDOM.render( <App />, document.getElementById('root') );`

<br>

## `NoMatch.js`

-   Just a `<div> PAGE NOT FOUND </div>`

<br>

## `Users.js`

-   Just a `<div> The Users Page </div>`

<br>

## `Courses.js`

-   an array of objects with `id`, and a `title`.

```
state = {
		courses: [
			{ id: 1, title: "Angular - The Complete Guide" },
            ...
```

-   Mapped out into a `<Link>`, taking the `id` and the `props.match.url` ( `/courses` ) and pushing into that URL when clicked

-   Has a switch + route component in this file for a nested routing

-   Uses **dynamic routing**, which uses the `/:arg` syntax

    -   ### How is `dynamic routing` used?
        -   Since clicking on the `<Link>` just pushes to `/courses/1` or `/courses/2`, etc, the route will always be the same, just the last argument is changing
        -   So, by having it point to `path={this.props.match.url + "/:id"}`, the argument is only changing at `/:id` !
        -   And the component `<Course>` gets the `/:id` dynamic variable from `const id = this.props.match.params.id;` !

<br>

## `Course.js`

-   Utilizes lifecycle methods

    -   `componentDidMount()`
    -   `componentDidUpdate()`

-   `URLSearchParams` takes in the URL, literally just destructures the URL path
    -   and here, we just set the course title from the URL name, using `this.setState({courseTitle: item[1]})`

```
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.userID !== prevProps.userID) {
		 	this.fetchData(this.props.userID);
		}
	}
```

-   Run this code IF the `old` value is DIFFERENT from the `incoming` value

<br>

## `Aux.js`

-   An auxiliary class, just a `<div>` that returns the `{children}`
-   Makes it possible to write adjacent JSX
-   one big div, wraps around all divs.. that's all!

<br>

## `App.js`

-   contains
    -   `<BrowserRouter />`
    -   `<NavLink />`
    -   `<Switch />`
    -   `<Route />`
    -   `<Aux />`
