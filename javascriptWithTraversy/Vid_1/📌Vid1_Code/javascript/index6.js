// console.log('test');

// // // 📍 functions

// // function addNums(_1, _2){
// // console.log(_1 + _2);
// // }

// // addNums(4,5)

// // // notice how if the function has log in it, it executes when called 
// // // when it has return, it requires another log(function())

// // function addNums_two(_1,_2){
// //   return _1 + _2
// // }

// // addNums_two(2,8)
// // // doesn't print

// // console.log(addNums_two(2,8));
// // // prints

// // 📍arrow functions
// // name it as a variable
// // add paramteters
// // use fat arrow to go to actions

// const arrow_addNums = (num1 = 4, num2 = 5) => {
//   return num1 + num2;
// }

// const arrow_2_addNums = (num1, num2) =>{
//   return num1 + num2
// }

// console.log(arrow_addNums);
// // doesn't print result
// // if you already declared the values in the parameters, then consolelog !

// console.log(arrow_2_addNums(4,5));

// const cleaner_arrow_addnums = (num1 = 1, num2 = 2) // => num1 + num2
// console.log(cleaner_arrow_addnums);

// const oneValue_arrow = num1 => num1 + 5
// console.log(oneValue_arrow(2));

// const practiceArrow = (num1,num2,num3) => num1 + num2 + num3
// console.log(practiceArrow(2,3,4));

// // // 💡returns an 8 digit number
// // function genPass () {
// //   for (let i = 0; i<8; i++) {
// //     return Math.floor(Math.random() * 1000000000)
// //   }
// // }

// // console.log(genPass());