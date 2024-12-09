//Clouser in javascript

function outer() {
  let counter = 6;
  return function () {
    counter++;
    return counter;
  };
}

let incremenred = outer();
console.log(incremenred());
console.log(incremenred());
console.log(incremenred());

// clouser is a function and they remember inviroment that they  are created
