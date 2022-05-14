// const n = 10
// for (var i = 1; i < n; i++) {
//   if (i % 15 == 0) console.log("FizzBuzz");
//   else if (i % 3 == 0) console.log("Fizz");
//   else if (i % 5 == 0) console.log("Buzz");
//   else console.log(i);
// }

//let n = 4
const itemCount = [4,6, 1, 2, 1]
const target = 100
let n = itemCount[0]

let sum = 0;
for (let i = 1; i < itemCount.length; i++) {
      if(n != 0){
        sum+= itemCount[i]
        n --
      }
      
}

// for (let i = 0; i < itemCount.length; i++) {
//       for (let nn = 0 ; nn < n; nn++){
//         sum+= itemCount[i]
//       }
// }
console.log(target - sum);