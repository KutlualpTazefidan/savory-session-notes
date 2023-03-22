## JS Prototypes Objects and Classes

This is self study during the spiced academy bootcamp.
I want to understand classes, objects and prototypes with the focus of using classes in js.

Following page has everything we need to understand the class:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

---

## Learning Objectives

1. Defition of a prototype
2. Definition of a class
3. Structure of a class
4. Excercises

---

1. <u>Prototypes</u>

   - Every object (i.e date, array, ...) has a property called prototype, which is an object and has its own prototype property; creating a chain of prototypes 🐛.
   - The "last" prototype on the chain has a value of null.
   - Every derived object inherits the same prototype with all its methods. Reusablility!
   - Prototypes can be seen as a mechanism to inherit features from objects.

2. <u>Definition of a class</u>

   - Classes are a template for creating objects and are built on prototypes.
   - Classes can be also described as "special functions" and be defined with a class declaration or expression.
   - Classes are not hoisted.

3. <u>Structure of a class</u>

   - A class has a body defined between curly brackets, which contains a constructor, methods, fields ....
   - Constructor creates and initialize the objects created with a class.
   - A class has to contain only one constructur.
   - Methods are shared between all instances
   - Static methods/fields can be used.
   - Fields are like object properties and don't require keywords for intializitaion

   ```js
   class MyClass {
    field1=0;
    field2;
    argument1;
    #privateFeature = 0;
    constructor(argument1,argument2){
        this.argument = arguement1
        ...
    }
    someMethod(){
        return someValue;
    }
    static staticMethod(){
        returnvvalue;
    }
   }
   ```
