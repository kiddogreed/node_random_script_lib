
const lenNum = 5
const arr = [2,3,6,6,5]

let st = arr[0] // find the first value of an array
let nd = -1 //find the second value  - 1

for (let i = 0 ; i< arr.length; i ++){ //itere the array value using the length of the array
  if (arr[i] > st){  //check if the first iteration value is grater than the first value
    nd = st  //the second value will become the fist
    st = arr[i] //frst value gets the iterated value which is the 3rd value on array
  }

  if (arr[i] > nd &&  arr[i] < st){ //finally check if which is greater than the two
    nd = arr[i] //change the second value with iterated value
  }
}
//console.log(second);  //return the second highest value

// console.log(arr.join('')); // join item in array removing space and comma
// console.log(arr.sort((a, b) => b - a).join('')) //arrange array by order  a-b ascending ,b-a descending

// const max = Math.max(...arr)
// const min = Math.min(...arr)
// // console.log(max);
// // console.log(min)
// const newarr = []
// for (let i of arr){
//   if( i != max && i > min){
//     //  console.log(Math.max(...arr))
//     newarr.push(i)
//   }
  
// }
// console.log(Math.max(...newarr))

// let first = arr[0]; 
//    let second = -1;
//     for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > first) {
//         second = first;
//         first = arr[i]
//     }

//     if (arr[i] > second && arr[i] < first) {
//         second = arr[i];
//     }
// }


