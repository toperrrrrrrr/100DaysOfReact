# React

![Untitled](React%20f4741c7175f24d2ba35de5f75498b0d8/Untitled.png)

Today I studied with a youtube crash course to get an overview of what is React.js and learn the basics and principles of React. 

MERN is a technology stack that is used for building web applications. It includes MongoDB, Express.js, React, and Node.js, which are all open-source JavaScript-based technologies.

Commands I used: 
npx **create-react-app**  *****name-of-app***** : To create a app project.
npm start

<></> is a fragment : a fragment is used whenever we want to use different markups or tags. 

There are things that is called hooks. Some of the examples are useState and useEffect. I am not that sure how to use them properly but I will get there.

Components
props
State

Event example : Onclick={()}

From here on out. I am going to learn react step by step from w3schools

react only changes what is needed to be changed

React creates a virtual DOM in the memory

question. what is a DOM - 

1. Document Object Model: "DOM" is often used as an acronym for "Document Object Model." The DOM is a programming interface for HTML and XML documents. It represents the structure of a document as a tree-like model, where each element in the document is represented as a node. The DOM allows developers to interact with and manipulate the content, structure, and style of a web page using scripting languages like JavaScript.

I need to learn more related to ES6. 

**React ES6 Classes**

Classes is also a function. 
Functions and classes serve similar purposes in React, but have key differences to consider.

Functions are ideal for simple components without much internal state. They are easy to read and test.

Classes are better suited for complex components with more internal state and lifecycle hooks. They can be used to create reusable component templates that can be extended.

Ultimately, the decision on whether to use classes or functions depends on the specific needs of the component being developed.

```
class Car {
  constructor(name) {
    this.brand = name;
  }
}
```

The class name "Car" begins with an uppercase letter, as per the standard naming convention.

What is Class Method?
as per chat gpt here is the definition of Class method. 

> In React, when creating components using a class-based syntax, there are specific methods that you can use to define how your component behaves. Let's go through some commonly used React methods and what they do:
> 

> **`constructor()`**: The **`constructor`** method is called when a new instance of a component is created. It is used to initialize the component's state and bind event handlers.
> 

> **`render()`**: The **`render`** method is a required method in a React component. It returns the JSX (JavaScript XML) code that describes what the component should render on the screen. It's responsible for the visual representation of the component.
> 

> **`componentDidMount()`**: This method is called right after the component has been rendered to the screen. It's commonly used for performing tasks that require interaction with the browser or external APIs, such as fetching data.
> 

> **`componentDidUpdate(prevProps, prevState)`**: This method is called when the component's props or state have been updated. It allows you to perform actions based on the changes. You can compare the current props and state with the previous ones using the provided parameters.
> 

> **`componentWillUnmount()`**: This method is called right before the component is removed from the screen. It's used to perform any necessary cleanup or unsubscribe from external resources, such as event listeners or timers.
> 

> These are just a few examples of the commonly used methods in class-based React components. It's worth noting that with the introduction of React Hooks, function components have become more prevalent, and some of these lifecycle methods are not used in function components. However, understanding these methods can provide a solid foundation for understanding the lifecycle and behavior of React components.
> 

Method in classes is like a function.