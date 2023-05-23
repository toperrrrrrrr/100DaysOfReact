# Day 4

# The Root Node

The root node is the HTML element where you want to display the result.

It is like a *container* for content managed by React.

It does NOT have to be a `<div>` element and it does NOT have to have the `id='root'`:

*I can call it whatever I want and I can use any tag for this.* 

```
<body><header id="sandy"></header></body>
```

Display the result in the `<header id="sandy">` element:

```
const container = document.getElementById('sandy');
const root = ReactDOM.createRoot(container);
root.render(<p>Hallo</p>);
```

*we can run HTML code inside the .render but for better writing we will stick onto creating variables for it to be understood easier.*

# What is JSX?

JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

# Coding JSX

JSX allows us to write HTML elements in JavaScript and place them in the DOM without any `createElement()`  and/or `appendChild()` methods.

JSX converts HTML tags into react elements.

# Expressions in JSX

With JSX you can write expressions inside curly braces `{ }`.

The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result

*If I want to use a variables or any valid javascript codes into html I only have to use {}* 

# Inserting a Large Block of HTML

To write HTML on multiple lines, put the HTML inside parentheses:

If using multiple lines of html code like <p> make sure to use either a fragment <></> or <div> 

# Elements Must be Closed

JSX follows XML rules, and therefore HTML elements must be properly closed.

# Attribute class = className

The `class` attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the `class` keyword is a reserved word in JavaScrit, you are not allowed to use it in JSX.

# Conditions - if statements

React supports `if` statements, but not *inside* JSX.

To be able to use conditional statements in JSX, you should put the `if` statements outside of the JSX, or you could use a ternary expression instead:

# Example

Write "Hello" if `x` is less than 10, otherwise "Goodbye":

```
const x = 5;

const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
```

*props means properties*

React Class components are not that used normally anymore but still good to know how to use. Function Components are the new things that people are using.

