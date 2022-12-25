// object oriented programming

console.log('test')

// // 📍Constructor function

// function Person(firstName, lastName, DOB) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.DOB = new Date(DOB).getFullYear() //notice how you can format date !!! Use this ! 📌

// }

// // 📍instantiate objects

// const person_1 = new Person('john', 'smith', '12/25/1992')
// // console.log(person_1); 
// const person_2 = new Person('yumna', 'myLove', '11/17/1997')
// // console.log(person_2);

// console.log(person_1.DOB);


// 📍You can also add methods to this constructed object
// Crazy : You can add functions WITHIN the constructor object AND THEN CALL THEM .. instead of having to make new functions later

// function Individual(firstName, lastName, DOB) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.DOB = new Date(DOB)
//   this.getBirthYear = function () {
//     return this.DOB.getFullYear()
//   }
//   this.getFullName = function(){
//     return `${this.firstName} ${this.lastName}` //good job on using this template literal ! 
//     // Al7amdulilah
//   }
// }

// const Individual_1 = new Individual('omar', 'myGuy', '12/27/1999')

// console.log(Individual_1)
// console.log(Individual_1.getBirthYear());
// console.log(Individual_1.getFullName());

// 📍Prototypes --- still confusing for me

// Instead of shoving those method functions in the object, just add prototypes => prototypes allow you to construct within an object


function Person(firstName,lastName,dob){
  this.firstName = firstName
  this.lastName = lastName
  this.dob = new Date(dob)
}

const person_1 = new Person('john', 'doe', '04/03/1980')

Person.prototype.getBirthYear = function(){
  return this.dob.getFullYear()
}

Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

console.log(person_1.getBirthYear());
console.log(person_1.getFullName());
console.log(person_1);

function Object(property1, property2, property3){
  this.property1 = property1;
  this.property2 = property2;
  this.property3 = Number(Math.floor(property3)) // property 3 ➡️ #new# Number obect and round it 
}

// 📌PRACTICE 
// I almost fully understand it ➡️ need to put it into human words

const Object_1 = new Object('square', 'red', 12.34)
console.log(Object_1);

Object.prototype.getFullObject = function (){
  return `${this.property1}, ${this.property2}, ${this.property3}`
}

console.log(Object_1.getFullObject());

