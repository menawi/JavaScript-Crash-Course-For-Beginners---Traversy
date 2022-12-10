## JavaScript Crash Course For Beginners

### Topic: Arrays

#### Using constructor to turn argument/values into array

```javascript

// note on constructors
// format
const name = new type(arguments);

// the array

const numbers = new Array(1,2,3,4,5,6,7,8,9)

```

#### Creating array standard []

```javascript

// important point ➡️ you can add different data types within array , unlike other languages

const mixedFruits = ["apples", 10, true]

// now back to practice

const fruits = ["apples", "oranges", "pears"]

// lets pull out values from the array

console.log(fruits[0]);
// result = apples

console.log(fruits[3]);
// result = pears

```

#### Adding to arrays

```javascript

// import the fruits variable

console.log(fruits.push("mangos"));
// result = 

console.log(fruits.unshift("mangos"));
// result = "mangos" added to beginning of array

```


#### Removing to arrays 

```javascript

fruits.pop();


```

#### Check if array

```javascript

console.log(Array.isArray(fruits));


```

#### Get index of array item

```javascript

console.log(fruits.indexOf("oranges"));

// result = 

```

