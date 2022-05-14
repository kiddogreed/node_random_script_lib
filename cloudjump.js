//goal of the game is given input of an array consist of 1, 0 and length
//only iterate of jumps between 0, and skip or avoid 1
//reach the final goal with least possible jumps as possible

//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

const c = [0, 0, 0, 0, 0, 1, 0]  //string input

let ctr = 0, jmp = 0 //initialized counter var

console.log(c.length); //check length of array

while (ctr < c.length) { //while iteration is less than the length continue to iterate
  if (ctr+2 < c.length && c[ctr+2]== 0){ // check if 2 jumps is possible and landing on 0 , then increament 2
    jmp += 1
    ctr += 2
  }else if(ctr + 1 < c.length && c[ctr+1] == 0){ //check if 1 jumps is possible and landing on 0 , then increament 1
    jmp += 1
    ctr += 1
  }else{ //if no possible jump then continue to increment iteration but no jump
    ctr += 1
  }
  
}
console.log(jmp) //return final count of the jumps

