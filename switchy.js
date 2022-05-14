///create switch function that check if the string input initial index is included in one of these array 

function getLetters(s){
  let letter
  const a = ["a", "e", "i", "o", "u"]
  const b = ["b", "c", "d", "f", "g"]
  const c = ["h", "j", "k", "l", "m"]
  const d = ["n", "p", "q", "r", "s", "t", "v", "w", "x" , "y", "z"]
  const indx = s[0]
  const condi = true

  switch (condi) {
    case a.includes(indx):
      letter = "A"
      break;
    case b.includes(indx):
      letter = "B"
      break;
      
    case c.includes(indx):
      letter = "C"
      break;

    case d.includes(indx):
      letter = "D"
      break;
  
    default:
      letter ="unknown"
      break;
      
  }
  
  // if(a.includes(indx)){
  //   console.log("included");
  //   letter = "A"
  // }else{
  //   console.log("not included");
  //   letter = "unknown"
  // }

  console.log(indx);
  console.log(a.includes(indx));
  console.log(letter)
  return letter
}

getLetters("adfgt")