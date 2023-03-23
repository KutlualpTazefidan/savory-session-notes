# Function.prototype.bind

This is a self study notes during the savory bootcamp.
Bind

---

## Learning objectives

- `bind(value)` is a method
- Creates a new function
- Sets its this keyword to `value` : is passed down to the target function
- Additional arguments are allowed
- Sequence of the arguments matter.

`bind(thisArg, arg1, arg2, /* …, */ argN)`

## Asking ChatGPT questions:

Why would I use in js something like: 'this.expand = this.expand.bind(this)'?

In JavaScript, the "this" keyword is used to refer to the object that is executing the current function. However, the value of "this" can change depending on how the function is called, which can sometimes lead to unexpected behavior.

In order to avoid this, it is common to use the "bind" method to create a new function that has a fixed value of "this". The "bind" method returns a new function with the same code as the original function, but with the "this" value set to the argument passed to "bind".

So, when you see code like "this.expand = this.expand.bind(this)", it means that the "expand" function is being bound to the current value of "this". This is useful when you want to pass the "expand" function as a callback or assign it to a new object, but you want it to maintain its original "this" value.

By binding the function to "this", you ensure that it always has the correct context and can access the properties and methods of the current object.
