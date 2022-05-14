//https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
//goal is to track the valley count of the hikers
//starting is position is within the sealevel and end also on sealevel
//U=up altitude, D=down altitude sample
//DDUUDDUU = 0 count since all steps are below sealevel
//---\  /\  /---
//    \/  \/

const path = 'UDDDUDUU' //input strings
const steps = 8 //len or count of steps
let seaLevel = 0, valley = 0 //initilized variables

for (let i = 0 ; i < steps; i ++){ //iterate  i in path using steps count
    if(path[i] == "U"){// check if the itreation == up then increment sealvl
      seaLevel += 1
    }
    else if(path[i] == "D"){// check if the itreation == down then decrement sealvl
      seaLevel -= 1

    }
    if(path[i]== "U" && seaLevel == 0){ //final check if final step is also within sea level or starting position, you can now count the valley 
      valley += 1
    }
  
}
console.log(valley);

