var abbr = "Java Script Object Notation";
var breakarr = abbr.split(' '); // split the sentence into words
var  firstItem = breakarr.map(function(item){return item[0]}); // collect the first letter of each word
var reverse = firstItem.reverse().join("") // revierse the word and join

console.log(abbr); //  
console.log(breakarr);
console.log(firstItem)
console.log(reverse)