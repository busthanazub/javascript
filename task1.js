a = [
    [1,2],
    [10,22],
    [14,21],
    [3,6],
    [5,9],
    [19,28]
]

//1. find smallest array
// points = [
//     [1,2],
//     [10,22],
//     [14,21],
//     [3,6],
//     [5,9],
//     [19,28]
// ]
// points.sort(function(a, b){return a - b});
// high = points[0];
// console.log(high);
//2. print all number
// const arr=a 
// console.log(arr.flat());

// 3. print square of all number 
const arr=a 
console.log(arr.flat());

    for (let i of (arr.flat())){
            s=i*i;
            console.log(s);
        }


// console.log(newArray);
//4.print total sum
// const arr=a 
// let sum=(arr.flat()).reduce(function (accu,value){
//     return accu+value
// })
// console.log(sum)

//5.print highest number
// a = [[1,2],
//     [10,22],
//     [14,21],
//     [3,6],
//     [5,9],
//     [19,28]]

//  arr =a.flat()
// let largest = arr.reduce(function (a, b) {
//     return (a > b) ? a : b;
//  }
// );

// console.log(largest);

  
// var largest = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] > largest ) {
//           largest = arr[i];
//         }
//  }  
//  console.log(largest);     
 
 

// b = ["max" , "mili", "john"]
// //mili is present or not

// var str=b
// let res=str.includes("mili")
// console.log(res);