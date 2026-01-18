// early return patterns
// function score(val) {
//     if(val >= 87 && val < 90) console.log("Grade A")
//     if(val < 70) return "A Grade"
// }

// score(87)

// IIFE
// (function(params) {
    
// })()

// Dafult Parameters: 
// function sum(a = 20 , b = 12) {
//     console.log(a + b)
// }
// sum(12)

// Spread or Rest Paramters 
//       ...  = ...

// function multi(a , b , ...sum) {
//     return a , b , sum
// }

// let result = multi(12,4,9,3,4)
// // console.log(result) // array

// function studentResult(first , second , ...result){
//     // console.log(result)
//     console.log(`Topper First : ${first}`)
//     console.log(`Topper Second : ${second}`);
//     console.log(`Remaining students : ${result}`);
    
// }
// studentResult("Ali", "Zaid", "Zain","Hamza","Owais")


// function hello(fnc){     // fnc = function(){} // hello : higher order // fnc : callback
//     fnc()
// }
// hello(function(){
//     console.log("JS is powerful")
// }) // ye acccept kr rha hai aik or function 

// // Another example :
// function JS(){
//     return function(){
//         console.log("Hello,JS")
//     }
// }
// JS()()


// Pure function : aisa fnc jokai global var ko chnage na kre
// let count = 0
// function sayHello() {
//     console.log("Hello js")
// }
// sayHello()

// // Impure function : aisa fnc jokai bahar ki value ko change krde.........
// let Count = 0
// function impure(){
//     console.log(++Count)
// }
// impure()

// function efg(){
//     let a = 12
//     function hij(){
//         console.log(a);
//         let b = 25
//         console.log(c);
        
//         function xyz(){
//             let c = 30
//             console.log(a);
            
//         }
//     }
// }

// Closure
// function parent(){
//     let i = 15
//     return function(){
//         console.log(i)
//     }
// }
// parent()()


// Lecture 24 : Lexical Scoping in JS
// Lexical Scoping JS : Inner function apne parent (outer) function ke variables ko access kar sakta hai, par parent function inner function ke variables ko access nahi kar sakta.

// function outer() {
//     let a = 10
//     function inner() {
//         let b = 20
//         console.log(a + b); // 30
//     }
//     inner()
//     // console.log(b); b is not defined
// }
// outer()

// let num = 100;
// function foo() {
//     console.log(num);
// }

// function bar() {
//     let num = 200;
//     foo(); // 100
// }

// bar();

// foo() call ho raha hai inside bar, lekin lexical scope decide krta hai function ke definition ke hisaab se, call ke hisaab se nahi

// Closure Def : Inner function outer function ke variables ko “yaad rakhta hai”.
// ✅ Closure ke main points :
// Inner function outer function ke variables ko access kar sakta hai
// Outer function execute ho chuka ho, to outer me jo var the wo bh khatam hojana chahiye lekin  phir bhi inner function variables yaad rakhta hai qkai uskai pass outer ka reference hota hai
// Use: Private variables, counters, function factories, memoization

function outer() {
    let count = 0
    function innner() {
        count++ // 0
        console.log(count); // 1
    }
    return innner
}
let fnc = outer()
fnc()
fnc()
fnc()

let fnc2 = outer()
fnc2()
fnc2()

// Har outer() call ek naya closure environment create hota hai Isliye fnc aur fnc2 ke count alag hote hain