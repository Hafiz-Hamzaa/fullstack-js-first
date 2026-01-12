// console.log('js is running');

// // Loops : repetition jb bh code me hmara ho to ham kia use kregai loops ka.......

// // for loop
// for(let i = 1; i < 6; i++){
//     console.log("zain nafees")
// }

// // Flow : 
// // 1 < 6 = true {block kai ander first time yehi hoga}
// // 2 < 6 = true {}
// // 6 < 6 = false


// // print even numbers from 1-20
// for(let i = 1; i <= 20; i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }

// // while loop

// let x = 1
// while(x % 2 == 0){
//     console.log(x);
//     x++
// }

// // do while loop : me to aik dafa lazmi chloga 
// let name = 'ali'
// do {
//     console.log('hamza');
//     name = 'qasim'
    
// } while (name == 'zain');

// for(let i = 1; i <= 10; i++){
//     if(i == 5){
//         continue // skip iteration
//     }
//     console.log(i)
// }

// // print odd numbers using for loop and use continue keywords
// for(let i = 1; i <= 20; i++ ){
//     if(i % 2 == 0){
//         continue
//     }
//     console.log(i)
// }


// // for of string or arrays per iterable
// let str = "javascript"
// for(let val of str){
//     console.log(val)
// }

// // for in : objects : Object.values() || Object.keys()
// let obj = {
//     name: "zain",
//     role: "developer",
// }
// for(let key in obj){
//     console.log(`${key} : ${obj[key]}`);
// }

let abc = () => {
    return 
}

let xyzs = () => console.log('zain')
function xyz() {
    console.log('zain');
    
} // ES6 

// IIFE: Immediately Invoked Function Expression
(function() {
    // private variables
    console.log('IIFE Function')
})()

// var


function sum(a , b) {
    console.log(a + b)
}
sum(12) // argumnets : ye hamesha parameters

// a , b ye kia variable
// a or b undefiend

// let a;


// return : uski agai wali line execute nh hogi | return ki hoi value kaha per jati hai jaha hmra function call ho rh ho.


function sum(a , b) {
    return a + b // 12 + 22 = 32 return 32
}

// sum(12,20)

console.log(sum(32))
let result = sum()
console.log(result);