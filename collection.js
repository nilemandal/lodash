const _ = require('lodash')


let arr = [1,2,3,4,5,6,7,8,2,3,5,5,6]
// console.log('console log countBy', _.countBy(arr))
// Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).

// console.log('console log each' , _.forEach( arr , (arr) =>{
//     console.log(arr)
// }))
// Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

const userData = [
    {'name':'nilesh',age:24,city:'Navi Mumbai',active:true},
    {'name':'rohit',age:32,city:'Mohali',active:true},
    {'name':'sarvajeet',age:28,city:'Lucknow',active:false}
]

// console.log('consle log every' ,  _.every(arr , (count , index) => arr[index] === count ));
// console.log('console log every' , _.every([true, true, true], Boolean))
// Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).

// console.log('console log filter' , _.filter( userData , (user)=> user.active ));
// Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

// console.log('console log find', _.find(userData, {'name':'nilesh',age:24,city:'Navi Mumbai',active:true} ));
// Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

// console.log('console log reject' , _.reject(userData , {'name':'nilesh',age:24,city:'Navi Mumbai',active:true}) );
// The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for.

// console.log('console log shuffle' , _.shuffle([1,2,3,4,5,6,7]));
// Creates an array of shuffled values

// console.log('console log sample' , _.sample([1,2,3,4,5,6]));
// Gets a random element from collection.

// console.log('console log keyBy' , _.keyBy(userData , 'name'));
// Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked with one argument: (value).