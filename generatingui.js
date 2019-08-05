const MyComponent = (data) => UI;
// For those less ES6-inclined:
function MyComponent(data) { return UI; }
//React is a library that we can hand JavaScript objects to. It'll build the DOM for us.
//The React object is what's going to allow us to create objects that'll eventually become DOM nodes. We need React to create these objects because -- evetually -- we want to take advantage of a system that automatically re-renders UI as our application state changes. 
//ReactDOM This is what we'll use to render our UI to the browser.
//To create our descriptive objects (let's start calling them elements), we'll use the React.createElement()
//To render UI to the browser, we'll use the ReactDOM.render method.

//CREATING REACT ELEMENTS
//React.createElement is the most important method in the React library to understand right off the bat. That's because it returns the smallest building blocks of a React app: The React element.

//It takes three arguments:
// 1. type 2. props 3. children
// You're about to use React's createElement method to create what will end up as a DOM node. And for now, don't worry about the props argument -- simply pass null in its place. You just need to care about the type and any children that you feed to the function.
// Calling the function returns a React element -- an object that describes the type of DOM node that will eventually be rendered to the browser.
// Big whoop, you have a Javascript object that describes how a DOM element should look. How do we get it on the actual screen?
// For that you'll need ReactDOM's render method!
// Try your hand at asking ReactDOM.render to take our React element and throw it into a container that should already exist in the DOM.
// A React element describes what you want to see on the screen.
// ReactDOM's render method adds a React Element to the HTML DOM
//  The app.js file example below assumes that the index.html file has the container present in the DOM:
// const myButton = React.createElement('button', null, 'Click Me');
// 	console.log(JSON.stringify(myButton));
// 	/*
// 		Prints the following:
// 		{
// 		"type":"button",
// 		"key":null,
// 		"ref":null,
// 		"props": {
// 		"children":"Click Me!"
// 		},
// 		"_owner":null,
// 		"_store":{}
// 		}
// 	*/
// 	ReactDOM.render(myButton, document.getElementById('app'));
//
//index.html
// <div id="app"></div>

//Applications built with just React usually have a single root DOM node (in this case a div with the id of app), though you can have as many root nodes as you like