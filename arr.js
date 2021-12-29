const _ = require('lodash');

let arr = [ 1,2,3,4,5,false, 0 , 0 , -2, true, 'name','city' ];

console.log('console check chunk' ,  _.chunk(arr, 2) );
// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

console.log('Console check compact', _.compact(arr))
// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

console.log('console log concat' , _.concat(arr,['nilesh','mandal'],['navi mumbai','pune']));
// Creates a new array concatenating array with any additional arrays and/or values.

let newArr = [1,2,0,4,5,0,7,7];
console.log('console log difference', _.difference(newArr,[1,0]));
// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

console.log('console lohg drop' , _.drop(newArr,2) , _.dropRight(newArr,2))
// Creates a slice of array with n elements dropped from the beginning, and for dropRight from the end.

let adults = [
    { name:'nilesh',age:24 },
    { name:'rohit',age:34 },
    { name:'chotu',age:17 }
]
console.log('console log dropWhile', _.dropWhile(adults , (adult)=> {  return adult.age > 18 } ))
// Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

console.log('console log fill' , _.fill(newArr,3,2,3));
// Fills elements of array with value from start up to, but not including, end.

console.log('console log findIndex', _.findIndex(adults, function(d) { return d.age === 17 }));
// This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.

let numberArr = [ 1 , [2,3,4] , [ [ 1 , 2 ,3] , 5 ] ];
console.log('console log flatten' , _.flatten(numberArr) , _.flattenDeep(numberArr))
// Flattens array a single level deep.

console.log('console log uniq', _.uniq(newArr))
// Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.

console.log('console log ' , _.union( newArr, _.flattenDeep(numberArr)));
// Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.

let alphabet = ['a','b','c','d','e','f'];
console.log('console log zip', _.zip(newArr,alphabet) , _.zipObject(newArr,alphabet));
// Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.

console.log('console log tail' , _.tail(alphabet,3) , _.take(alphabet,3));
// Creates a slice of array with n elements taken from the beginning. whereas take Creates a slice of array with n elements taken from the beginning.

console.log('console log without', _.without(alphabet, 'a','c'));
// Creates an array excluding all given values using SameValueZero for equality comparisons.