// code is by video time frame OR function
// for e.g @minute 12_to_15
// OR
// GetNameFromObjects.js

// 📌 USING SUBSTRING TO MAKE A WORD SHORTCUT
// {
// // 📍
// let word = "Environment"
// let delimit = "/"
// let wordShort = delimit + word.substring(0,3)
// console.log(wordShort);
// // result = /Env

// // 📍
// function createShort(word) {
//     if (word.length > 9) {
//         console.log(delimit + word.substring(0,3))
//     } else {console.log('word lenght is NOT greater than 9 characters')}
// }

// console.log(createShort('Approximately'))

// // result = /App

// }

// 📌 PLAYING AROUND WITH PROPERTIES
// {
//     {
//         let word = "Javascript"
//     let word_method = word.charAt(0)
//     console.log(word_method)
// }

//     {
// let word = "Javascript"
// let word_method = word.charCodeAt(0)
// console.log(word_method)
//     }

//     {
//         let word = "Javascript"
// let word_method = word.includes('script')
// console.log(word_method)
//     }
    
//     {
//         let word = "Javascript"
//         console.log(word.length)
// let word_method = word.slice(0,3) + "/" + word.slice(7,10)
// console.log(word_method);

//     }
// }

// let word = 'longword'
// console.log(typeof(word));

// 📌SPLIT METHOD
{

    const longwords = 'Mao ZeDong , Deng Xiaoping , Chiang Kai-shek'
    console.log(longwords) // this is a string
    // console.log(typeof(longwords))
    // turn longwords into an array
    let longwordsArray = (longwords.split(',')) // this is an array
    console.log(longwordsArray)

}

/*⭐ IDEA

If a word from array of words is longer than 9 letters, then add it to the array of longwords ➡️ then you can use this array with a forEach method to make shortcuts for each word .

OR

If a word from array of words is shorter than 9 letters, then remove it from the array

*/ 

// 📌 ADD ',' BETWEEN EACH WORD

{ // ⚠️PROBLEM HERE
    const longWordsList = 'ability	able	about	above	accept	according	account	across	act	action	activity	actually	add	address	administration	admit	adult	affect	after	again	against	age	agency	agent	ago	agree	agreement	ahead	air	all	allow	almost	alone	along	already	also	although	always	American	among	amount	analysis	and	animal	another	answer	any	anyone	anything	appear	apply	approach	area	argue	arm	around	arrive	art	article	artist	as	ask	assume	at	attack	attention	attorney	audience	author	authority'

    // ⚠️ I AM TRYING TO SPLIT THIS WORD LIST USING , ➡️ I FEEL LIKE THE SOLUTION WILL BE USING A FOREACH FUNCTION 

}

{ //⚠️ PROBLEMS HERE
const longWordsArrayOne = new Array("ability,	able,	about,	above,	accept,	according,	account,	across,	act,	action,	activity,	actually,	add,	address,	administration,	admit,	adult,	affect,	after,	again,	against,	age,	agency,	agent,	ago,	agree,	agreement,	ahead,	air,	all,	allow,	almost,	alone,	along,	already,	also,	although,	always,	American,	among,	amount,	analysis");
console.log(longWordsArrayOne);

// ⚠️ ADDS A STUPID 'T' BEFORE EVERY WORD + DOESN'T CREATE AN ARRAY 

const longWordsTwo = ["ability,	able,	about,	above,	accept,	according,	account,	across,	act,	action,	activity,	actually,	add,	address,	administration,	admit,	adult,	affect,	after,	again,	against,	age,	agency,	agent,	ago,	agree,	agreement,	ahead,	air,	all,	allow,	almost,	alone,	along,	already,	also,	although,	always,	American,	among,	amount,	analysis"]
console.log(longWordsTwo);

// ⚠️ ADDS A STUPID 'T' BEFORE EVERY WORD + DOESN'T CREATE AN ARRAY 

}

