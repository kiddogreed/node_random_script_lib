const readline = require('readline')

const rl = readline.createInterface( process.stdin, process.stdout)
const PI =Math.PI

rl.question( "please enter radius :", (radius) =>{
  console.log(`area = ${PI * (radius ** 2)}`)
  console.log(`perimeter = ${2 * (PI *radius)}`)
})
//console.log(PI);

//this accept input from stdin and print out the area and peremeter 