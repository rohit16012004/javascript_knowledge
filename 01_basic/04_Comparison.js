
console.log("2">1);//true
console.log("02">1);//true


console.log(null==0);//False
console.log(null>0);//False
console.log(null>=0);//true

/*
Why null >=0 is True?
***************** Reason ******************
The reason is that an equality == check and 
comparisons >,<,<=,>= work differently.
Comparison convert null to a number,trating it as 0.
(3)null >= 0 is true but (1)null > 0 is false.

*/

console.log(undefined==0);//False
console.log(undefined>0);//False
console.log(undefined>=0);//False

//Triple Equal Stroy (===)
//It will check the datatype of both the operand it is same or not.
console.log("2"===2);//False
