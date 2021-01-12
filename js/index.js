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

let hacker2CharsReverse = []

for ( i = hacker2Chars.length-1; i >= 0; i--) {
  hacker2CharsReverse.push(hacker2Chars[i])
}

console.log(hacker2CharsReverse)

//OR so let hacker2CharsReverse = hacker2Chars.reverse()
// console.log(hacker2CharsReverse)

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


//Bonus 1

let loreIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas semper augue ut molestie. Morbi sit amet felis nec magna varius vehicula. Sed imperdiet orci eu purus tincidunt luctus. Vivamus erat metus, rhoncus at ligula eget, vestibulum tincidunt velit. Cras vestibulum eleifend sodales. Curabitur porta, magna sed blandit tincidunt, libero neque semper massa, vitae sagittis dolor tellus in nisi. Morbi id venenatis dolor, ac aliquet diam. Integer non efficitur mauris, sollicitudin blandit tellus. Duis sed congue neque. Phasellus et molestie lorem, sit amet viverra diam. Fusce gravida sollicitudin laoreet. Sed cursus nunc est, at feugiat nisl suscipit sit amet. Ut vulputate magna non lobortis tincidunt. Sed molestie rhoncus commodo. Nulla vitae est quis metus posuere ornare vel rhoncus augue. Curabitur vel facilisis justo, in accumsan velit. Vestibulum ultricies, massa non lacinia mollis, ex arcu rutrum nulla, ac accumsan sapien nulla in diam. Nullam in nisl sollicitudin, efficitur quam ac, placerat arcu. Ut bibendum lobortis velit, eu accumsan turpis. Nulla mattis elit nulla, nec tincidunt massa suscipit dapibus. Suspendisse tincidunt magna justo, eget gravida purus gravida et. Aliquam dapibus lorem ut ipsum pretium convallis. Sed feugiat libero at justo rutrum pellentesque. In vitae est non diam porttitor eleifend vel nec lacus. Etiam et metus convallis, mollis quam sit amet, euismod diam. Integer non tortor nec magna fermentum tempor. Praesent in iaculis leo. Integer nec ultrices ex."

let loreIpsumSameCase = loreIpsum.toLowerCase()
console.log(loreIpsumSameCase)

let loreIpsumWords = loreIpsumSameCase.split(' ')
console.log(loreIpsumWords)

let loreIpsumWordsCount = loreIpsumWords.length
console.log(loreIpsumWordsCount)

let etCounter = 0;

  for (let i = 0; i < loreIpsumWords.length; i++) {
    if ( loreIpsumWords[i] === 'et' ) {
       etCounter++
    }
  }

 console.log(etCounter)