// CLASSES

console.log('test print')

// 📍Constructor using Classes

class Person {
  constructor(first,last,dob) {
    this.first = first;
    this.last = last
    this.dob = new Date(dob)

  }
}

const person_1 = new Person('omar', 'sanchez', '12/29/1990')

console.log(person_1)

Person.prototype.getFullYear = function() {
  return this.dob.getFullYear() // ⚠️ getFullYear is a valid method but it doesn't autopopulate when typing for some reason  ➡️ only when typing after the Date method
}

console.log(person_1.getFullYear());

// CLASS. ADD PROTOTYPE. NAME_OF_PROTOTYPE_FUNCTION = FUNCTION () {
  // ACTION THIS_CLASS. THIS_PROPERTY_OF_CLASS. NAME OF METHOD TO PERFORM
// }

// PRINT (NAME_OF_PROTOTYPE_FUNCTION())