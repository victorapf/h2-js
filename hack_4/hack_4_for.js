/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let i=1;

for (;i<=7;i+=2){
    result.push(i)
}

console.log(result)

//export result
module.exports = result;