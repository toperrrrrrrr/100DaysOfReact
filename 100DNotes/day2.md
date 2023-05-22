# Day 2

# Class Inheritance

To create a class inheritance, use the `extends` keyword.

The `super()` method refers to the parent class.

By calling the `super()` method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.

To learn more about classes, check out our [JavaScript Classes](https://www.w3schools.com/js/js_class_intro.asp) section.

I might need to look back at the documentations for vanilla JS to further understand this.

It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets *and* the `return` keyword:

But as a good coding practice I will keep the brackets. 

**What About this?**
With arrow functions, the `this` keyword *always* represents the object that defined the arrow function.

```
hello = ()=> { "Hello World!" } ;
```

Variables

Now, with ES6, there are three ways of defining your variables: `var`, `let`, and `const`.

If you use `var` outside of a function, it belongs to the global scope.

If you use `var` inside of a function, it belongs to that function.

If you use `var` inside of a block, i.e. a for loop, the variable is still available outside of that block.

`let` is the block scoped version of `var`, and is limited to the block (or expression) where it is defined.

If you use `let` inside of a block, i.e. a for loop, the variable is only available inside of that loop.

`const` is a variable that once it has been created, its value can never change.

In conclusion var tends to be usable on a bigger scale. While let is more exclusive. const is more rigid and cannot be changed. 

# Array Methods

There are many JavaScript array methods.

One of the most useful in React is the `.map()` array method.

The `.map()` method allows you to run a function on each item in the array, returning a new array as the result.

In React, `map()` can be used to generate lists.

# Destructuring

To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.