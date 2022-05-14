//https://www.hackerrank.com/challenges/js10-try-catch-and-finally/forum


try {
  const s = "1234"  //expected output is 4321 

  const s_split = s.split("")
  const s_rev = s_split.reverse()
  const s_join = s_rev.join('')
//console.log(s.split("").reverse().join("")) 
console.log(s_join);
  
} catch (error) {
  console.log(error.message);

  
  
}finally{
  console.log(s);
}