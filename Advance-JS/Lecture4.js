// ProtoTypal Inheritance

// let BhaiName = "Amit sharma";
// let myname = "Sumit sharma";

// function person(name, youngerbro) {
//   this.name = name;
//   this.youngerbro = youngerbro;
// }

// person.prototype.hello = function () {
//   console.log(
//     `Hello EveryOne I am ${this.name} and my YoungerBtother name is  ${this.youngerbro}`
//   );
// };

// let sumit = new person(myname, BhaiName);
// sumit.hello();

// creting another prototypal inheritance how can you write

function greet(Name) {
  thisName = Name;

  return function method() {
    console.log(`Hello ${thisName}`);
  };
}

let sumit = new greet("Sumit Sharma");
sumit();
