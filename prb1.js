//const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

// convert arrays to object
function convertArrayToObject(array1){
const ansArray = []
    // const spredOpt = {...array1};
    for(let i = 0; i< array1.length; i++){
        const array = array1[i];
        const object = {name: array[0],
            skills : array[1],
            scores : array[2]
        }
        ansArray.push(object)
};
return ansArray
}
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

console.log(convertArrayToObject(students))
//console.log(convertArraytoObject(student))