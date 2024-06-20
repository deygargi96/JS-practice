// Problem statement:
// In a polling booth there are 3 candidates and 100 tottal voters.100 voters will give their vote. Then Out of 3 candidates who will win?
// initial vote value of each voters right now
let candidate1Votes = 0;
let candidate2Votes = 0;
let candidate3Votes = 0;

// total voters
const totalvoters = 100;
// generate random candidate  between 1-3;
const randomCandidate = Math.floor(Math.random() * 3) + 1;

for (i = 0; i < 100; i++) {
  if (randomCandidate === 1) {
    candidate1Votes++;
  } else if (randomCandidate === 2) {
    candidate2Votes++;
  } else {
    candidate3Votes++;
  }
}

// Now we will compare the total votevalues of 3 candidate to know the winner.

console.log(`candidate1 received ${candidate1Votes} votes`);
console.log(`candidate2 received ${candidate2Votes} votes`);
console.log(`candidate3 received ${candidate3Votes} votes`);

let winner;

if (candidate1Votes > candidate2Votes && candidate1Votes > candidate3Votes) {
  winner = "candidate1";
} else if (
  candidate2Votes > candidate1Votes &&
  candidate2Votes > candidate3Votes
) {
  winner = "candidate2";
} else {
  winner = "candidate3";
}

console.log(winner);

// Array

let student_arr = [];
function addstudent() {
  let newstudent = {
    name: document.getElementById("s_name").value,
    roll: document.getElementById("s_roll").value,
    phone: document.getElementById("s_phone").value,
  };
  student_arr[student_arr.length] = newstudent;
  // student_arr.push(newstudent)
  console.log(student_arr);
}

let fruit = ["Apple", "Banana", "Orange"];

// fruit.push(fruit)
fruit.push(fruit);
console.log(fruit);

// In one vote polling booth there are 3 candidates and 10 voters and 10 voters give their vote accordingly by choosing an option from between the 3 options given, then calculate the total votes of the each candidate and then compare them to determine who is the winner? How we will do this by loop and if - else condition?

candidate1Votes = 0;
candidate2Votes = 0;
candidate3Votes = 0;

function countVotes() {
  let voteOptions = document.querySelectorAll('input[name="candidate"]');

  for (var i = 0; i < voteOptions.length; i++) {
    if (voteOptions[i].checked) {
      if (voteOptions[i].value === "1") {
        candidate1Votes++;
      } else if (voteOptions[i].value === "2") {
        candidate2Votes++;
      } else if (voteOptions[i].value === "3") {
        candidate3Votes++;
      }
    }
  }
}

let winnerNew;

if (candidate1Votes > candidate2Votes && candidate1Votes > candidate3Votes) {
  winnerNew = "winner candidate 1";
} else if (
  candidate2Votes > candidate1Votes &&
  candidate2Votes > candidate3Votes
) {
  winnerNew = "winner candidate 2";
} else if (
  candidate3Votes > candidate1Votes &&
  candidate3Votes > candidate2Votes
) {
  winnerNew = "winner candidate 3";
} else {
  console.log("winner is tie");
}

// let result=document.getElementById("result")
//      result.innerHTML=`Total votes of candidate1 is ${candidate1Votes} votes <br>`
//       ` Total votes of candidate2 is ${candidate2Votes} votes <br>`
//                         `Total votes of candidate3 is ${candidate3Votes} votes <br>`
//                                                             ` winner is : ${winnerNew}`;

// operations on Array

let book = ["English", "Math", "Science", "Bengali"];

console.log(book);

// Array Methods

// push() to add an element to the last of an Array

book.push("History");

console.log(book);

// unshift() to add an element to the first of an Array

book.unshift("History");

console.log(book);

// pop() to remove an element from the last of an Array

book.pop("History");

console.log(book);

// shift() to remove an element from the fast of an array

// splice() is used to remove an element from the middle or any position. there is two parameter one is to determine from which position we want to remove an element and how many elements we want to remove

book.splice(1, 2);
console.log(book);

// we want to see the element which is stored in the second from the last

console.log(book[book.length - 2]);

// We want to check an elements position from a large set of array we will use indexOf()
let food = [
  "Rice",
  "Fish",
  "Chicken",
  "Paneer",
  "Dal",
  "Bread",
  "Loaf",
  "Peanut",
  "Jam",
  "Mutton",
];

console.log(food);

let position = console.log(food.indexOf("Peanut"));

// Now if we want to check a variable is it a Array or not we will use Array.isArray()
food = [
  "Rice",
  "Fish",
  "Chicken",
  "Paneer",
  "Dal",
  "Bread",
  "Loaf",
  "Peanut",
  "Jam",
  "Mutton",
];

// food = "Rice";

console.log(Array.isArray(food));

// It will return false because the variable now is set to string.
// It will return true because the variable now is set to An Array.

// split()
let text = "This is a text";

console.log(text.split(" "));

// Join()
food = [
  "Rice",
  "Fish",
  "Chicken",
  "Paneer",
  "Dal",
  "Bread",
  "Loaf",
  "Peanut",
  "Jam",
  "Mutton",
];

let Joinfood = food.join(" ");

console.log(Joinfood);

// concat()

let country = ["USA", "Canada", "Australia", "South Africa", "India"];
let countryTwo = ["UK", "Newzealand"];

let NewCountry = country.concat(countryTwo);

console.log(NewCountry);

// multidimentional Array
let device = ["tablet", "mobile", "desktop", "laptop"];

let deviceWithBrands = [
  ["tablet", "ipadair"],
  ["mobile", "iphone"],
  ["desktop", "mac"],
  ["laptop", "mac"],
];

// let getdevicedata = deviceWithBrands[3][2];

function getdevicedata(outerIndex, innerIndex) {
  if (
    deviceWithBrands[outerIndex] !== undefined &&
    deviceWithBrands[outerIndex][innerIndex] !== undefined
  ) {
    return deviceWithBrands[outerIndex][innerIndex];
  } else if (deviceWithBrands[outerIndex] !== undefined) {
    return deviceWithBrands[outerIndex];
  } else {
    return "no records found";
  }
}

console.log(getdevicedata(4, 4));

// includes() is the method which returns true or false if the element is in the array or not instead of returning the index of the array

let friends = ["riya", "Shivam", "bani"];

console.log(friends.includes("bani"));
console.log(friends.includes("rishav"));

// filter() is used to filter any data from the set of array which is required.

let number = [1, 34, 60, 5, 8, 4, 2, 80, 45, 87];

// output should be [34,60,80,45,87];

// let result = number.filter(index => index > 10);

let result = number.filter((index) => {
  return index > 10;
});

console.log(result);

// callback function
let number2 = [1, 34, 60, 5, 8, 4, 2, 80, 45, 87];

function greaterthan10(index) {
  return index > 10;
}

let result2 = number2.filter(greaterthan10);

console.log(result2);

// anonymous function
let number3 = [1, 34, 60, 5, 8, 4, 2, 80, 45, 87];

let result3 = number3.filter(function (index) {
  return index > 10;
});
console.log(result3);

// Example 2. array of objects;

let team = [
  { name: "gargi", position: "developer" },
  { name: "riya", position: "designer" },
  { name: "shivam", position: "marketer" },
  { name: "shayan", position: "developer" },
  { name: "rishav", position: "ux designer" },
  { name: "rita", position: "developer" },
  { name: "sunny", position: "designer" },
  { name: "madhav", position: "marketer" },
  { name: "trina", position: "accountant" },
];

// let developer = team.filter(index => index.position === "developer");

let developer = team.filter(index =>{
  return index.position === "developer";
})

console.log(developer);

// callback function

function personPositon(index){
  return index.position === "developer";
}

let developerNew = team.filter(personPositon);
console.log(developerNew);

// anonymous function

let devloper = team.filter(function(index){
  return index.position === "developer";
})

console.log(devloper);

// find()
// find() method returns the value of the first element in an array that passes a test on condition based
// findIndex() method returns the index of the first element in an array that passes a test on condition based


let ages = [5, 7, 10, 15, 13, 3, 18, 22];

// anonymous function
let checkAdult = ages.find(function(element){
 return element > 18;
})

console.log(checkAdult);

// arrow function
checkAdult = ages.find(element=> element > 18);

console.log(checkAdult);

// findIndex()

let agePosition = ages.findIndex(element=> element > 18);

console.log(agePosition);

// forEach loop method in array

// let birds = ["sparrow", "cuckoo", "crow", "parrot"];

// let loopOfbirds = birds.forEach(element,index=>{
//   return [element,index];
// })

let birds = ["sparrow", "cuckoo", "crow", "parrot"];

// let loopOfbirds = [];
// birds.forEach((element, index) => {
//   loopOfbirds.push(element, index);
// });

// console.log(loopOfbirds);

birds.forEach(function(element , index){
  console.log(element,index);
})


let arr = [18,40,10,5,2];

let newarr = arr.map((value,index)=>{
 console.log(value)
 return value - index
})

console.log(newarr);
console.log(newarr.length-1);

// reduce() method executes a reducer(function ) that you provide on each element of an array and returns a single output value. It does not change the array.

// It takes four parameters
// *Accumulator- Accumulates the value of each element  from the array. 
// *Current Value- current element of the array
// Current Index
// Initial Value- the initial value of the accumulator



let arr2 =[18,40,10,5,2,0,25,28];

let newarr2=arr2.reduce((value1, value2)=>{
  return value1 + value2;
})
console.log(newarr2);

// For a given array with marks of student find the average marks of the class.

let StudentMarks = [67, 78, 90 ,76,45];

let sum = StudentMarks.reduce((accumulator,currentvalue)=>{
   return accumulator + currentvalue;
})

console.log(sum);

let classAvrg = sum / StudentMarks.length;
console.log(classAvrg); 


// slice method returns a portion of an array into a new array object from the start upto end  (end not included in the array), where start and end represents the index of items in that array.

let fruitsArray = ["apple","litchi","grapes","banana","watermelon"];

let newfruitsArray = fruitsArray.slice(0,3);

newfruitsArray=fruitsArray.slice(2,5);
newfruitsArray=fruitsArray.slice(-3, -1);


console.log(newfruitsArray);



// splice() is used to remove or replace an element from the middle or any position. there is two parameter one is to determine from which position we want to remove an element and how many elements we want to remove


let months = ["jan","march","april","june"];
months.splice(1,0,"feb");
months.splice(4,1,"may");
console.log(months);

let monthsNew = ["jan","feb","march","monday","tuesday"];
let days = monthsNew.splice(3,2);
console.log(monthsNew);
console.log(days);

// removing elements with splice

let fruits = ['apple', 'banana', 'cherry', 'dates', 'elderberry'];

let removeFruits = fruits.splice(2,2);
console.log(fruits);
console.log(removeFruits);

// adding elements with splice

 fruits.splice(2,0, "grapes", "litchi");
console.log(fruits);

// replace elements with splice
fruits.splice(2,2,"mango","orange");
console.log(fruits);

// adding elements in the negative index;

fruits.splice(-3,0,"strawberry");
console.log(fruits);

// important notes on splice
// javascript arrsy splice is a built in technique for changing the contents of an array by removing,adding or replacing elements of the array.
// the splice method modifies the original array on which it is called.
// the splice method returns an array combining the removing elements. If no elements are removed then it will return an empty array.
// Negative indices count from the end of the array.
// If deleteCount is omitted or set to 0, no elements are removed.
// Additional arguments after deleteCount are the elements to be added to the array.

// reverse() the reverse method reverses the order of the elements of an array.

// sort() used to sort an array of strings alphabetically./for numbers also;

let Studybooks = ['English','Math','Physics','Chemistry','Biology','Computer Science','Bengali'];
console.log(Studybooks);
Studybooks.sort();
console.log(Studybooks);
Studybooks.reverse();
console.log(Studybooks);

// some() chcks if any of the elements in an array passes a test conditionally and it will return true or false based on the result of the test.
// in the following example we are testing that if the ages are adultages or not?
let age = [100,50,22,28,20,22,27];

let adultAge = age.some(checkAdultNew);
console.log(adultAge);

function checkAdultNew(age){
 return age >= 18;
}

// the at() returns the indexed element of a string
// const txtName= 


// callback method
//  // Blocking code
//  console.log("Blocking code start", new Date().getTime());
//  for (let i = 0; i < 10000000000; i++) {

//  }
//  console.log("Blocking code end", new Date().getTime());

// // non blocking code
// //Nonblocking code
// console.log("Non Blocking code start", new Date().getTime());
// setTimeout(() => {
//     console.log("Non blocking code execute.");
//     callback();
// }, 2000);



// function callback(){
//  console.log("Non Blocking code end", new Date().getTime());
 
// }

// non blocking problem

// const bringGoods = () => {
//   console.log("Go to merket to bring goods");
// }

// const coockFood = (callback) => {
//   console.log("Coocking started.");
//   setTimeout(() => {
//       console.log("Coocking complete.");
//       callback();
//   }, 2000);
// }

// function serveFood() {
//   console.log("Serve food.");
// }

//Acync code
// bringGoods();
// coockFood();
// serveFood();

// sol 1-using callback method

// bringGoods();
// coockFood(serveFood);

// // sol 2-using promise then 

// const bringGoods = () => {
//   console.log("Go to merket to bring goods");
// }

// const coockFood = () => {
//   return new Promise((resolve, reject) => {
//       console.log("Coocking started.");
//       setTimeout(() => {
//           console.log("Coocking complete.");
//           resolve()
//       }, 2000);
//   })
// }


// // Acync code
// bringGoods();
// coockFood().then(()=>{
//   serveFood();
// });



// sol 3-using async/await

(async () => {
  // Solve 3: Using async await
  const bringGoods = () => {
      console.log("Go to merket to bring goods");
  }

  const coockFood = () => {
      const myPromise = new Promise((resolve, reject) => {
          console.log("Coocking started.");
          setTimeout(() => {
              console.log("Coocking complete.");
              resolve()
          }, 2000);
      })
      return myPromise;
  }

  function serveFood() {
      console.log("Serve food.");
  }

  //Acync code
  bringGoods();
  await coockFood()
  serveFood();


})()














