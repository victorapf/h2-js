/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let newNumbers = [1,3,5,7]

result = result.concat(newNumbers.map(numeros =>{
    return numeros;
}))


console.log(result)


//export result
module.exports = result;