// let score="33"
// let score = true
let score=null
//let score="33abc" valid but the number is Nan(not a number)

console.log(typeof score) ;

// console.log(typeof score) ;  Object --- null
// console.log(typeof score) ;  String --- 33 & 33abc
// console.log(typeof score) ;  boolean --- true/false
let valueInNumber = Number(score);
console.log(typeof valueInNumber) ;

// console.log(valueInNumber);  Nan--(String)
// console.log(valueInNumber);  0----(null)
// console.log(valueInNumber);  0----(False)
// console.log(valueInNumber);  1----(True)


let isLoggedIn=1
// let isLoggedIn=""  => False in Boolean
// let isLoggedIn="Ashis" => true in boolean

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


let somenumber = 33
let StringNumber=String(somenumber)//convert to string
console.log(typeof StringNumber);


