// Iteration 1: Names and Input
console.log('I am ready')


let hacker1 =  'Stefan'

console.log(`The driver\'s name is ${hacker1}'`)


let hacker2 = 'Timo'

console.log(`The navigator\'s name is ${hacker2}'`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length ) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
if (hacker2.length > hacker1.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)}
if (hacker2.length === hacker1.length) {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters`)
}

// Iteration 3: Loops

// 3.1. Iteration

 let hacker1Chars = hacker1.split('')
 console.log(hacker1Chars) 

  
 let hacker1Space = hacker1Chars.join(" ")
 console.log(hacker1Space.toUpperCase())

// 3.2 Iteration

 let hacker2Chars = hacker2.split('')
 console.log(hacker2Chars)

let hacker2CharsReverse = hacker2Chars.reverse()
console.log(hacker2CharsReverse)

let hacker2Space = hacker2CharsReverse.join(' ')
console.log(hacker2Space.toUpperCase())

// 3.3. Lexicographical Order

 if ( hacker1.localeCompare(hacker2) < 0 ) {
   console.log(`Yo, the navigator goes first definitely.`)
 }
if ( hacker1.localeCompare(hacker2) >  0) {
  console.log(`The driver's name goes first.`)
}
if ( hacker1.localeCompare(hacker2) ===  0) {
  console.log('`What?! You both have the same name?`')
}


