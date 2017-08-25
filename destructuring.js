// ========================
// DESTRUCTURING
// ========================

// Use object destructuring to save the property values from the object carDetails into new variables.

var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}

// CODE HERE
var {color, make, model, year} = carDetails;

// ========================


// In the function below named greeting, it is receiving an object as a parameter.
//Use object destructuring to save the object properties to new variables.
//The property names are firstName, lastName, and title. Return the concatenated string.

function greeting( obj ) {
  // CODE HERE
  var {firstName, lastName, title} = obj;

  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
}


// ========================


// Write a function called totalPopulation that will take in an object.
//That object will have 4 properties named utah, california, texas and arizona.
//The property values will be numbers.
//Use object destructuring to save the property values to new variables.
//Sum up the values and return the total number.

  // CODE HERE
  function totalPopulation(obj) {
    var {utah, california, texas, arizona} = obj;
    return utah+california+texas+arizona;
  }


// ========================


// Write a function called ingredients that will take in an object.
//This object will have 3 properties named carb, fat, and protein.
//The property values will be strings.
//Use object destructuring to save the property values to new variables.
//Push these new variables to an array and return the array.

  // CODE HERE
  function ingredients(obj) {
    var {carb, fat, protein} = obj;
    var arr = [];
    arr.push(carb, fat, protein);
    return arr;
  }


// ========================


// Now we will use object destructuring as the function's parameter instead of
//destructuring the object inside of the function declaration. See the example below:

// function example( {one, two, three} ) {
//   return one + two + three
// }

// Write a function called largeNumbers that will take a destructured object as it's parameter.
//The object properties will be named first, second, and third and their values will be numbers.
//Find the smallest number of the three and return that number.

  // CODE HERE
function largeNumbers({first, second, third}) {
  var {one, two, three} = {one: first, two: second, three: third};
  var arr = [];
  arr.push(one, two, three);
  arr.sort(function compare(a,b){
    return a-b;
  });
  return arr[0];
}

// ========================


// Write a function called numberGroups that will take a destructured object as it's parameter.
//The object properties will be named a, b, and c and their values will be arrays of numbers.
//Find the longest array and return that array.

  // CODE HERE
  function numberGroups({a,b,c}) {
    var {first, second, third} = {first: a, second: b, third: c};
    var arr = [];
    arr.push(first, second, third);
    arr.sort(function orderLongToShort(a,b){
      if (a.length>b.length) {
        return -1;
      }
    });
    return arr[0];
  }
