// // Arrays in JS

// let fruits = ["orange" , "apple" , "1" , true]
// console.log(fruits[10]); // undefned
// // arrays are  mutable

// // fruits[1] = "grapes"

// // Original array ko chnage krte VS kuch new array return krdete hai
// let cars = ['civic','mehran','corolla']
// cars.push("toyota")
// console.log(cars);

// // new Array([]) , new String("zain")

// let numbers = [1,2,3,4]
// console.log(numbers.reverse());

// let tech = ['html' , 'css' , 'js' , 'react']
// tech.splice(2 , 1 , "node js" )
// console.log(tech);

// let vegetables = ['onion' , 'tomato' , 'ladyfinger' , 'carrots']
// let ans = vegetables.slice(1,4) // first paramte = inclusive , second paramter hota hai exclusive = optional
// console.log(ans);

// Array Sort methods
// let tech = ['js' , 'python' , 'java' , 'c++']
// tech.sort()
// console.log(tech);

// let nums = [1 , 3 , 6 , 7]
// nums.sort()
// console.log(nums);

// let numbers = [12,34,10,6,50]
// let acNum = numbers.sort((a,b) => {
//     return b - a // sort in ascending order 
// })
// console.log(acNum)

// foreach
// let square = [2,4,6,8,10] /// (elem , idx , arritself)
// square.forEach((e , idx , arr) => {
//     console.log(e ** 2);
//     // console.log(arr);
// })

// map : modification
// let cube = ["Ali" , "Zain" , "Hamza"]
// let newArr = cube.map((elem) => {
//     return `Mr ${elem}`
// })
// console.log(newArr);

// let data = [20,21,24,45,78,90]
// let evn = data.filter(e=>{
//     return e % 2 === 0 // []
// })
// console.log(evn)

// let numericalData = [10,20,30,40,50]
// let sum = numericalData.reduce((pre , curr) => {
//     return pre + curr
// },0)
// console.log(sum);

// 0 + 10 = 10
// 10 + 20 = 30
// 30 + 30 = 60
// 60 + 40 = 100
// 100 + 50 = 150

// let n = [20,45,78,92,20]
// let output = n.find(e=>{
//     return e > 40
// })
// console.log(output)


// let score = [20,45,78,92,20]
// let toper = score.some(e=>{
//     return e === 20
// })
// console.log(toper)

// let marks = [70,95,78,92,60]
// let student = marks.every(e=>{
//     return e > 65
// })
// console.log(student)

// let arr = [100 , 90 , 30 , 40]
// let [first , , , last]   = arr
// console.log(first , last);

// let a = 12
// let b = 10
// [a , b] = [b , a]
// console.log(a);
// console.log(b);