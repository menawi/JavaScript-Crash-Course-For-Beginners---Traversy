// console.log('test print') 


const todo = [
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

// create variable that is JSON format
    // const todoJSON = JSON.stringify(todo);
    // console.log(todoJSON)

    // 📌JSON important because it is how APIs send and receive data

    // 📍 for loops

// for (let i = 0; i <10; i++){
//   console.log(i)
// }

// for(let i = 0; i<=10; i++)
// {
//   console.log(`For Loop Number: ${i}`);
// }

// // 📍 while loops
// // variable set outside the loop

// let i = 0
// while(i<10){
//   console.log(`while loop number: ${i}`);
//   i++ //if you NOT include this, while loop will run forever and your laptop will freak out and explode and burn (partially true)
// }


// 📍loop through arrays

// for(let i = 0; i <todo.length; i++){
//   console.log(todo[i].text);
// }

// 📍for(let) 

// for(let todos of todo){
//   console.log(todos.text)
// }

// ⚠️todos here gives a name for the individaul objects within the array todo

// for (every one of array todo){
//   print todo.text within it
// }

