const s = 'javascriptloops'
const cons = ['a','e','i','o','u']
    let ini = []
    let ini2 = []
    
    for (let w of s){
      if(cons.includes(w)){
         ini.push(w)
         console.log("print to 1");
      }else{
        ini2.push(w)
        console.log("print to 2");
      }
    }
    const combi = [...ini, ...ini2]
    for (let c of combi){
      console.log(c);
    }
    
    //seperate vowel and consonant  from string input