// // -------------- Chapter 02 , 03 , 04

// // let a;
// // console.log(a);

// //  const b = 23
// // //  b = 'hamza'

// //  // Primitve VS Non Primitve Data Types = jisme brackets use ho rh hai  () , [] , {} -> non primitve

// //  // string data types
// //  // " " , ' ' , ` ` -> Template Literal (string interpolation) - ${expressions} 

// // //  let name = "hamza"
// // //  let userName = 'ali'
// // //  let myNamee = `Hamza`

// //  const age = 12
// // //  console.log("My name is " + name + , " " +)
// // console.log(`My name is ${name} ${1+2+3}`);

// // // number datta type
// // let userAge = 12.5
// // console.log(typeof userAge);

// // // boolean - true or false true = 1 and false = 0
// // console.log(true + 1);

// // // + operator ka do kaam hai : aik to normal numnbers ko add krna dosra kaam hai contatenation
// // console.log("1" + 1);
// // console.log("10" - 5); // quirks JS 

// // // Explicit VS Implicit 
// // // Implicit  : Jo JS khud aik cheez ko doosre cheez me convert krde
// // // Explicit  : Jo chhez ham khud se aik cheez ko dosri cheez me convert krde
// // let x = "10"
// // console.log(typeof x);

// // let convert = Number(x)
// // console.log(typeof convert);

// // console.log("120" + 23 + "5" - 10);

// // // undefined : ye wo wali value hai  jo JS hame khud provide krta hai
// // // null : null developer lhud se set krta hai

// // let z; // undefiend
// // let f = null

// // console.log(undefined + 1);// NaN
// // console.log(null + 6); // 0 + 6 = 6
// //  // 0 + 6 = undefined = 0 + 1 = 1

// //  let number = 123456789n
// //  console.log(typeof number);

// //  let sym = Symbol('zain') // uniqueness


// // unary operators = increment by 1 or decraese

// let a = 2
// // pre increment and pre decrement
// // 3
// console.log(a); // 3

// // post increment
// ++a // 2
// console.log(a); //  3

// --a // 1
// a-- // 2
// a // 1


// // post increment and post decrement

// parseInt("12")
// Number("10")
// // short hand = +string


// // + : agr kisi string kai sth + operator lgado to number me convert krdega
// let g = "5";
// console.log(+g); // 5 (converted to number)

// single expression and single statment hai.
let days = 'Saturday'
switch (days) {
    case 'Saturday':
        console.log('Go for College');        
        break;
    case 'Saturday':
        console.log('Go for University')
        break;    
    default:
        console.log('Not going anywhere');
}
// if(true)

let age = 12
let hasID = true
if(age >= 18){
    if(hasID){
        console.log("Grant Permssion")
    }else{
        console.log('You have not id available')
    }
}else{
    console.log('Your age is not applicable')
}

// Ternary Operators = short hand if-else : if : ? else =  :
let userName ='Hamza'
let result = userName == 'Hamza' ? "Voted" : 'Not Voted'
console.log(result);