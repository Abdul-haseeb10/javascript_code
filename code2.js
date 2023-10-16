// Variable declaration
let myNumber = 42;

// Function definition
function doubleNumber(number) {
  return number * 2;
}

   // Using the function
let result = doubleNumber(3);

// Logging the result
console.log(result);

//there are three ways to declare a  varible
//let & const
/*var a;
var b = "3"
a = "7"

b =  "a"
console.log(a)
 var studlyCapVar;
 var upperCase;
var titleCaseBAR;


//ASSIGNMENTS
studlyCapVar = 10;
upperCase = "a string"
titleCaseBar = 100;
console.log(upperCase)
           //un initialize  variables
var a = 3;
var b = 4;
var c ="iam a";

//
a = a + 5
b = b +4
c = " string!"
console.log(a);
console.log(c);
            // adding numbers*************
var a;
var b;
sum = (a + b)
 a = 7;
 b = 8;
 console.log(sum)
            //double string *********************
var myStr = "firstline\n\t\\second line\nthirdline";
console.log(myStr)
        // cancatinating string**************************************
//var myData = "this is start. " + " this is end"
//console.log(myData)
//*****************************bracket notation in  string  brackets
var myFirstNameLatter = "";
var myName = "abdul"

myFirstNameLatter = myName[0]
console.log(myFirstNameLatter)
//******************* 

var firstName = " ";
var myName = "abdul"
 
var firstName = myName[myName.length - 3]
console.log(firstName)
**************************words blanks************

function wordBlanks(name, place, pet) {
    var result = "My name is " + name + ", my place is " + place + ", and my pet is a " + pet + ".";
    return result;
}

console.log(wordBlanks("Abdul Haseeb", "Islamabad", "cat"));

****************Arrays******************
var ourArray = [30,20,10]
var myArary = [];

myArary=ourArray[2]
console.log(myArary)
// filter  eklements  in  function having an array

function filterEvenNumbers(arr) {
  return arr.filter(function (element) {
      return element % 2 === 0;
  });
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);
************  objects ******************
// Define an object with functions (methods)
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    }
};

// Use the object and its methods
console.log(calculator.add(5, 3));       // Output: 8
console.log(calculator.subtract(7, 2));  // Output: 5
console.log(calculator.multiply(4, 6));  // Output: 24
console.log(calculator.divide(10, 2));   // Output: 5 


*******************4. Objects with Arrays:

const car = {
    make: 'Toyota',
    model: 'Camry',
    features: ['GPS', 'Leather Seats', 'Sunroof']
};

console.log(car.features[0]); // GP


***car properties and methods****


const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022,
  color: 'Silver',
  mileage: 15000,
  isRunning: false,
  start: function() {
    if (!this.isRunning) {
      this.isRunning = true;
      console.log(`${this.brand} ${this.model} is now running.`);
    } else {
      console.log(`${this.brand} ${this.model} is already running.`);
    }
  },
  stop: function() {
    if (this.isRunning) {
      this.isRunning = false;
      console.log(`${this.brand} ${this.model} has been stopped.`);
    } else {
      console.log(`${this.brand} ${this.model} is already stopped.`);
    }
  },
  drive: function(distance) {
    if (this.isRunning) {
      this.mileage += distance;
      console.log(`${this.brand} ${this.model} has been driven ${distance} miles.`);
    } else {
      console.log(`${this.brand} ${this.model} cannot be driven as it's not running.`);
    }
  },
};

// Using the car object
console.log(`Brand: ${car.brand}`);
console.log(`Model: ${car.model}`);
console.log(`Year: ${car.year}`);
console.log(`Color: ${car.color}`);
console.log(`Mileage: ${car.mileage} miles`);
console.log(`Is Running: ${car.isRunning}`);

car.start();
console.log(`Is Running: ${car.isRunning}`);

car.drive(100);
console.log(`Mileage: ${car.mileage} miles`);

car.stop();
console.log(`Is Running: ${car.isRunning}`);/




EXample 2*********
const person = {
  name: 'John Doe',
  age: 25,
  account: {
    username: 'john_doe_123',
    email: 'john@example.com',
    balance: 5000
  },
  city: 'New York',
  isEligible: function() {
    return this.age >= 18 && this.account.balance > 0;
  }
};

// Accessing and printing information about the person
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`Username: ${person.account.username}`);
console.log(`Email: ${person.account.email}`);
console.log(`Account Balance: $${person.account.balance}`);
console.log(`City: ${person.city}`);
console.log(`Eligible: ${person.isEligible() ? 'Yes' : 'No'}`);


****************Arrays******************
var ourArray = [30,20,10]
var myArary = [];

myArary=ourArray[2]
console.log(myArary)
// filter  eklements  in  function having an array

function filterEvenNumbers(arr) {
    return arr.filter(function (element) {
        return element % 2 === 0;
    });
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);

//************** multidimension arrays with indexes

const threeDArray = [
    [
      [10, 20, 30],
      [40, 50, 60]
    ],
    [
      [70, 80, 90],
      [100, 110, 120]
    ]
  ];
  
  const value = threeDArray[1][0][2]; // Accessing the element at layer 1, row 0, column 2 (value: 90)
  
  console.log(value);
  ********************** EXAMPLE 2**************
 // multiArray:
  // Example multidimensional array
const multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Accessing elements
  const element = multiArray[1][2]; // This will retrieve the element at row 1, column 2 (value: 6)
  
  console.log(element);


 // ***8** modify changes the values of an array
 var myArray = [45 , 44 ,46] 
  myArray[1] = 100;

  console.log(myArray);     
                 *********             functions     
  function myFirst(a ,b) {
    var sum = a + b;
    console.log(sum)
    
  }
  myFirst(4, 5);
  *********************************** global variable***********************
  var myglobal; // Declare myglobal outside of any function

function myFirst() {
  myglobal = 10;
}

function mySecond() {
  var result = "";
  if (typeof myglobal !== "undefined") {
    result += "myglobal: " + myglobal;
  }
  console.log(result);
}

myFirst();
mySecond();*/
//************************ example*******
/*function wordBlanks(name , place , car) {
    var result = "my name is" + name + ", and my place is" + place + " ,and my car is" + car + " ,"
    return result;

    
}
console.log(wordBlanks("abdulhaseeb" ,"islamabad","car"))

//WHILE LOOP********************
var myArray = [];
var i = 0;
while(i < 5){
  myArray.push(i)
  i++;
}
console.log(myArray);
function sumNumbersUpToN(n) {
  let sum = 0;
  let i = 1;

  while (i <= n) {
    sum += i;
    i++;
  }

  return sum;
}

// Example usage:
console.log(sumNumbersUpToN(5)); // Output: 15 (1 + 2 + 3 + 4 + 5)
function arrayLength(arr) {
  let count = 0;

  while (count < arr.length) {
    count++;
  }

  return count;
}

const myArray = [1, 2, 3, 4, 5];
console.log(arrayLength(myArray)); // Output: 5


//*******generate random fractions********

function randomFraction() {
  return Math . random();

  
}
console.log(randomFraction());
//************************* generate  random whole number**********
function randomWholeNumber() {

  return math . floor(math .random() * 10);
}
console.log(randomWholeNumber)*/
   

//**************random whole number with range*********

function randomWholeNum(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(randomWholeNum(1, 10));


//****** use the parseInt function********* string into integar conversion******
  

function conveertIntoIntegar(str) {

  return parseInt(str);

}
conveertIntoIntegar("27")



// use the  parseInt functin in redix(base 2,10 ,8,16)
function convertIntoIntegar(str) {
  return parseInt(str, 2)
  
}
conveertIntoIntegar("1010101")


/// USE the conditional ternary operator*************"
function checkEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }

//we can  right if else  as ternary operator as this
return a === b ? true : false;
}

console.log(checkEqual(2, 1));



//******** use of multiple ternary operators
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));

// how to mutant the const array
const s =[2 ,3 ,4,5]
function editInPlace() {
  s[0] = 3 ;
  s[1] = 4;
} 
 editInPlace();
 console.log(s);

 // prevent mutation in object freeze
 function freezeObj() {
  const MATH_CONSTANTS = {
    P1: 3.14,
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.P1 = 99;
  } catch (ex) {
    console.log(ex);
  }

  return MATH_CONSTANTS.P1;
}

const P1 = freezeObj();
console.log(P1);
////// write higher orders  arrow functions filter and  map check number is integer and greater than 0

const realNumberArray = [1, 2, 3, 4, 5, 0.1, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

  // use distructuring assignment to assign variable from objects

  const avgTemperature = {
    today: 75.5,
    tommorw: 79,
  };
  
  function getTempOfTommorrow(avgTemperature) {
    const { tommorw: tempOfTommorw } = avgTemperature;
    return tempOfTommorw;
  }
  
  console.log(getTempOfTommorrow(avgTemperature));
  
    
  // use distructuring assignment to pass an object as a function parameter


  const stats = {
    max: 56.78,
    min: -0.75,
    average: 35.85,
  };
  
  const half = function ({ max, min }) {
    return (max + min) / 2;
  };
  
  console.log(stats);
  console.log(half(stats));


  // use a class  syntax to define constructor function
  function makeClass() {
    class Vegetable {
      constructor(name) {
        this.name = name;
      }
  
      introduce() {
        console.log("This is a vegetable called " + this.name);
      }
    }
  
    return Vegetable;
  }
  
  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot');
  console.log(carrot.name);
  carrot.introduce();


  //getter and setters in the code 
  function makeClass() {
    class Thermostate {
      constructor(temp) {
        this._temp = 5/9 * (temp - 32);
      }
  
      // Getter for _temp 
      get temperature() {
        return this._temp;
      }
  
      // Setter for _temp
      set temperature(celsius) {
        this._temp = celsius;
      }
    }
  
    return Thermostate;
  }
  
  const Thermostate = makeClass();
  const myThermostate = new Thermostate(32);
  
  // Using the getter
  console.log(myThermostate.temperature); // Output: 0
  
  // Using the setter
  myThermostate.temperature = 20;
  console.log(myThermostate.temperature); // Output: 20
  
  
  
  














 
  


  

