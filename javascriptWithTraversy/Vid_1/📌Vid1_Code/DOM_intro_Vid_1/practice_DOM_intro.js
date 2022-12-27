console.log('test')

// 📍 console.log(window);
// will print out all methods !

// 📍DOM

//  📍SINGLE SELECTORS

// document.getElementById('element')

// document.querySelector('element OR .class') ⬅️ FOR THIS, MAKE SURE YOU HAVE THE DOT
// >> even if more than one in that class, it will retrieve that class !


// console.log(document.getElementById('my-form')
// )

// will Log the element

// const form = document.getElementById('my-form')


// 📍MULTIPLE SELECTORS
// document.getElementsByClassName('class') FOR THIS, NO DOT REQUIRED (SEE ABOVE ⬆️ ) ⬅️ ONLY FOR CLASSES
// document.getElementsByTagName('tag')--- also not recommended 

// bytagname and byclassname ➡️ something will inabliltiy to get HTML collection / have to convert to array ?

// document.querySelectorAll('element' OR '.class') ⬅️ ⭐ TRAVERSY RECCOMENDS THIS METHOD 🪲

// 📍PRINT OUT EACH ITEM FROM LIST ITEMS

// // define the variable 'items'
// const items = document.querySelectorAll('.item')

// // run a forEach on them
// items.forEach((item) => console.log(item));


// ➡️ practice
console.log('test two');

// 🪲
// const new_items = document.querySelectorAll('item')
// console.log(new_items);
// // I WAS NOT ADDING THE DOT BEFORE THE CLASS ! 
//

// 📌struggling with this one at the moment - will require more practice

// get a list by class name using querySelectorAll
// don't forget the dot
// run a forEach +arrow func

const new_items_fixed = document.querySelectorAll('.item')


console.log(new_items_fixed);

// new_items_fixed.forEach()

new_items_fixed.forEach((item) => console.log(item))

// 📍manipulate the DOM

const ul = document.querySelector('.items')
// remove entire element list
// ul.remove();

// remove last element
// ul.lastElementChild.remove()

// change text content of element
ul.firstElementChild.textContent = 'Hello'

ul.children[1].innerText = 'brad'

ul.lastElementChild.innerHTML = '<h1>New HTML !</h1>'

// get button and change color
const btn = document.querySelector('.btn')
// 💡You can add events and make the button change color based on that !
// btn.style.background = 'red'

// 📍EVENT LISTENER

// event
// function

// btn.addEventListener('click', (e) => {
//   console.log('click');
// })

// this won't work because the input element by default has to input/submit the form ➡️ you can change this tho

// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('click');
// })

// now form no longer submits

// you can get the attributes of the things you click

// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(e.target);
// })

// result = <input class="btn" type="submit" value="Submit">

// change form background color


btn.addEventListener('click', (e) => {
  e.preventDefault();
document.querySelector('#my-form').style.background = '#ccc'
// add class from css to body when click
document.querySelector('body').classList.add('bg-dark');
// change text
document.querySelector('.items').lastElementChild.innerHTML = '<h1>Say Hello when clicked</h1>'
})

// there is also mouseover
// mousehover
// mouseout





