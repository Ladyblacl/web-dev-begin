let a = 5
let b = 10

let c = a + b;
let d = b - a
let e = a*b
let f = b/a


console.log(c)
console.log(d)
console.log(e)
console.log(f)


//this is for addition 
console.log("the addition of " + a + " and " + b + " is: " + c);

//using literal template strings
console.log(`the addition of ${a} and ${b} is: ${c}`);

//this is for multiplication
console.log("the multiplication of " + a + " and " + b + " is: " + e);

//using literal
console.log(`the multiplication of ${a} and ${b} is: ${e} `);

//this is for division
console.log("the division of " + b + " over " + a + " is: " + f);

//using literal template
console.log(`the division of ${b} over ${a} is: ${f}`);