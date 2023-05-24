# Day 5

# Props
Props are arguments passed into React components.

Props are passed to components via HTML attributes.

props stands for properties.

React Props
React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:

ExampleGet your own React.js Server
Add a "brand" attribute to the Car element:

```const myElement = <Car brand="Ford" />;

The component receives the argument as a props object:

Example
Use the brand attribute in the component:

```function Car(props) {
```  return <h2>I am a { props.brand }!</h2>; 
```}

Note: React Props are read-only! You will get an error if you try to change their value.

```<button onClick={shoot}>Take the Shot!</button>

React Event Object
Event handlers have access to the React event that triggered the function.

In our example the event is the "click" event.

In React, you can conditionally render components.

&& == then