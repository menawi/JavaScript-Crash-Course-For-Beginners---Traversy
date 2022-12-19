// OBJECTS
const person = {
first: 'john',
last: 'doe',
age: 30,
hobbies: ['music', 'running'],
address: {
    street: 'humberwood',
    city: 'michigan',
    country: 'USA  '
},

}

// console.log(person_0);

let name = person.first;
// console.log(name);
let street = person.address.street;
// console.log(street);
let running = person.hobbies[1]
console.log(running);

const {first, last} = person

console.log(first);

// let addressNumber = person.address.push("unit: 404")
// console.log(addressNumber);
// console.log(person.address);

// ADD OBJECT
// add Unit number to Address object in person object

const {address} = person
let unit = address.assign(person, {"Unit" : "808"})
console.log(unit);


// 1 ➡️ get first
// 2  ➡️ get first last
// 3 ➡️  get index of music
// 4 ➡️ add 'unit number: '888' to address john
// 5 ➡️ add 'sailing' to hobbies john

// console.log(person_0.first);
// console.log(person_0.first, person_0.last);
// console.log(person_0.hobbies.indexOf('music'));

// pull data out of this object

// const {first, last} = person_0;
// // 📌 THIS MAKES 'first' AND 'last' variables to use outside of the object
// console.log(first);
