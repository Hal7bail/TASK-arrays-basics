
let emptyArray = []
let hobbies = [ "piano", "pottery", "shooting",
 "sleeping", "eating", "gaming"];
//  let numbers = [ "7", "3", "4", "73", "44"]; 
// using "" will make it strings not numbers.
// console.log("7" + "3")    = 73
// console.log(7 + 3)        = 10
 let numbers = [ 3,7,73,44,4];
 console.log ( numbers[1]);
console.log( hobbies [ hobbies.length -1]);
hobbies.push ("whtevr");
console.log ( hobbies [hobbies.length -1]);
console.log ( hobbies.length);
console.log ( `i have ${hobbies.length} hobbies`);
// hobbies = hobbies.slice (0, -2);
// pop doesn't care wht comes after it ONLY REMOVES ONE LAST ELEMENT
hobbies.pop();
hobbies.pop();
console.log ( hobbies.length);
console.log ( hobbies[0]);
console.log ( hobbies[1]);
console.log ( hobbies[2]);
console.log ( hobbies[3]); 
console.log ( hobbies[4]);
hobbies = [];
console.log (hobbies);


