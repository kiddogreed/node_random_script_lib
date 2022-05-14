//https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// const count = {}
// for (let element of s ){
//   if(count[element]){
//     count[element]+=1
//   }else{
//     count[element] = 1
//   }
// }
// console.log(count[Object.keys(count)[0]]);

// const first = count[Object.keys(count)[0]]
// // console.log(s);
// // const ss = s.filter(function(x){return x=='a'}).length 
// // console.log(x)

// // Let has local scope

const s = "aba"
const n = 10
const stringSize  = s.length
const a = s.split('').filter((a)=> a =='a').length

const repeat = Math.floor(n/stringSize)
const left = n-(repeat * stringSize)

//console.log((repeat * a) + s.split('').filter((a,i) => a == "a" && i < left).length)
const first = repeat * a
const second = s.split('').filter((a,i) => a == "a" && i < left).length

console.log(first);
console.log(second);

