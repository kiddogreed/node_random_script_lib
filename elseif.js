//https://programs.programmingoneonone.com/2021/01/hackerrank-day-3-intro-to-conditional-statements-solution.html
//this code solved the weird/not Weird problem
const N = 24
// if (N % 2 != 0){
//   console.log("Weird")
//   } else if( N %2 == 0 & N >= 2 | N <= 5){
//        console.log("Not Weird");
//   }else if( N %2 == 0 & N >= 6 | N <= 20){
//        console.log("Weird");
//   }else if( N  > 20){
//        console.log("Not Weird");
//   }else{
//    console.log("Not Weird");
//  }

  // if (N % 2 != 0){
  //   console.log("Weird");
  // }else{

  //   if( N %2 == 0 & N >= 2 | N <= 5){
  //     console.log("Not Weird");
  //   }else if( N %2 == 0 & N >= 6 | N <= 20){
  //     console.log("Weird");
  //   }else if(N > 20){
  //     console.log("Not Weird");
  //   }
  //   else{
  //     console.log("Not Weird");
  //   }
  // }

  
    if (N % 2 == 0){
      if (N >= 2 && N <= 5){
        console.log("Not Weird")
      }else if(N >= 6 && N <= 20){
        console.log("Weird")
      }else if(N > 20){
        console.log("Not Weird")
      }

    }else if(N % 2=== 1){
      console.log("Weird");
    }