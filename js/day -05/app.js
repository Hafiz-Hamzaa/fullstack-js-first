// let key = "name"
// let obj = {
//     [key]: "zain",
//     age: 12,
//     role: 'dev'
// }
// console.log(obj.age);
// console.log(obj['role']);
// obj.age = 20
// console.log(obj.age);

// let user = {
//   name: "Amit",
//   address: {
//     city: "Delhi",
//     pincode: 110001,
//   },
// }; // user or address dono object : Nesting object
// console.log(user.address.pincode); // 110001 : yehi to hai deep access


let fruist = ['apple' , 'orange' , 'banana']
// for(let fruit of fruist){
//     console.log(fruit)
// }

// for(let i = 0 ; i < fruist.length; i++){
//     console.log(fruist[i])
// }

// let std = {
//     name : 'zain',
//     age: 20,
//     role: 'dev'
// }
// console.log(Object.entries(std)); // array of array


// for(let key in std){
//     console.log(`${key} :  ${std[key]}`);
// }

// let obj = {
//     name: "hamza",
//     age: 21,
//     role: 'junior dev',
//     address: {
//         location: 'karachi',
//         country: 'Pakistan'
//     }
// }

// let {country} = obj.address
// console.log(country);

// let info = {
//     name:"Hassan",
//     age:23,
//     profession:{
//         role:"designer"
//     }
// }
// // // info.professions.role // yaha aiga eror qkai professions hai isko handle krne kai liye aisa krkste hai
// // info?.professions?.role // ab yaha error nh aiga undefined ajai ga
// console.log(info?.professions?.role);

// Computed Properties : you can use variable as keys
let keys = "marks"
let myObj = {
    name:"maaz",
    [keys]:90
}
console.log(myObj);