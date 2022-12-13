## JavaScript Crash Course For Beginners

### Topic: Object Literals

#### Making the Object Literal

```javascript

const person = {
firstName = "John",
lastName = "Doe",
age = 30,
hobbies = ['music', 'movies', 'sports'],
address: {
street = '50 main st'
city = 'Boston'
state = 'MA'
}
}

// note using " and ' interchangeably but always symmetrically ( every - i.e. "value" , 'value')


```

!!! tip Practice
    Get the value 'movies' from the person object

```javascript

let moviesFromPerson = console.log(person.hobbies[1]);

// result = 

```

!!! tip Practice
    Get the city
    
```javascript

person.address.city

```

#### Creating new variables from object literals - destructuring

```javascript

const {firstName, lastName} = person
// result = 
console.log(firstName);
// result = John

// translation

new variables {firstName and lastName} from object "person"

// 📌 Note that firstName and lastName now become variables that can be accessed on their own via log 

// 📍 You can even add new variables to the new variable 'string' such as address from person

const {firstName, lastName, address: {city} } = person


```


#### Adding properties to object

```javascript

person.email = 'john@gmail.com'

console.log(person);
// result all of person + email property added with corresponding value

```
