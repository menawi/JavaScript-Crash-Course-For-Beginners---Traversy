// Higher order array methods
// Prefereed for iteration

// forEach (loops thru)
// map (creates new array from an array)
// filter (creates a new array based on a condition)

// console.log('test')

const todos = [
  {
    id: 1,
    text: 'take out trash',
    isCompleted: true
  },

  {
    id: 2,
    text: 'meeting with boss',
    isCompleted: true
  },

  {
    id: 3,
    text: 'dentist appt',
    isCompleted: false
  }

]

// console.log(todos)

//  📍forEach

// todos.forEach(function(todosItems)
// {
//   console.log(todosItems.text);
// })

// // 📍map
// // makes a new array out of existing one

// const todoText = todos.map(function(TextOfTodo) 

// { return TextOfTodo.text }

// )


// console.log(todoText);

// 📍Here is the one I find MOST useful

// get all tasks that are completed from todos

// const completedTasks = todos.filter(function (todos_completed) {
//   return todos_completed.isCompleted === true
// })

// console.log(completedTasks);

// ⚠️ Hard time understanding the iterator in the function(i) and the actual variable

// 💡Try example

const products = [
  {
    name: 'Lucira',
    type: 'COVID TEST'
  },

  {
    name: 'Flowflex',
    type: 'COVID TEST'
  },

  {
    name: 'Medium Gloves',
    type: 'PPE'
  },

  {
    name: 'gown',
    type: 'PPE'
  },

  {
    name: 'Saniwipes',
    type: 'Cleaning'
  }

]

// console.log(products)
// 📌 quick quiz : what methods can you use on an array?

// make a new array of all products that are COVID TEST

// const COVIDTEST = products.filter(function(CT){
//   return CT.type === 'COVID TEST'
// })

// console.log(COVIDTEST);

// // 📍 here is where map can be useful

// const COVIDTEST_typeText = products.filter(function(CT){
//   return CT.type === 'COVID TEST';
// }).map(function(CTT){
//   return CTT.name
// })

// console.log(COVIDTEST_typeText);

// // interp

// // for 'products', return an array of only the COVID TESTS , and print out the names of the items that are COVID TESTS

