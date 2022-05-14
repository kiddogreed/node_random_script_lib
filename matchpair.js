///https://www.hackerrank.com/challenges/sock-merchant/forum
// const ones = {};
// console.log(ar.reduce((pairs, i) => {
//   if (ones[i]) {
//       delete ones[i];
//       return pairs + 1;
//   } else {
//       ones[i] = true;
//       return pairs;
//   }
// },0)) 
 //goal of the code is given an input of arrays, 
 //count the number of pairs on it  and return  

const n = 9  
const ar =  [10, 20, 20, 10, 10, 30, 50, 10, 20,50] 
           

let ones = {}, pairs = 0; //initilized for pairs and single 

console.log(ones.hasOwnProperty());  //check if it is equal to inside the  object iteration <bool>
for (let i = 0; i < n; i++) { // iterate  the  arr within  given len<n>
    if (ones.hasOwnProperty(ar[i])) { //now checks if iteration is inside the ones{} object
        pairs++;  // pairs couter increment
        delete ones[ar[i]]; // delete the object item which is equal to the current iteration example 10 , and ar[i] = 10 then a pair of 10 will count as 1 then remove in ones{} object
    } else { //if iteration has no equivalent pair inside the ones{} then it will be add in ones {} object  and return 0 
        ones[ar[i]] = 0;
    }
    //after completing the iteration of <n> number of steps  will return or log the pair count and ones{} value/items
}
console.log(pairs);
