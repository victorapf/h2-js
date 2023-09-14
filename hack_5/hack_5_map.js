/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let newNumbers = [7,5,3,1]

result = result.concat(newNumbers.map(numeros => {
    return numeros
}))

console.log(result)
//export result
module.exports = result;