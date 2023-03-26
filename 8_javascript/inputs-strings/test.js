const person = {
  name: "John",
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
};
const boundSayHello = person.sayHello.bind(person);
boundSayHello(); // Output: "Hello, my name is John"
