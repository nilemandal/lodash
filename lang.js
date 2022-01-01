const _ = require('lodash');

// console.log('console log castArray' , _.castArray( 'nilesh' ));
//  Casts value as an array if it's not one.

let arr = [1,2,3,4,5]
let newArr = _.clone(arr);
// console.log('console log clone' , newArr , arr);
// Creates a shallow clone of value.

// console.log('console check isEqual' , _.eq( 23 , 23 ));
// Performs a SameValueZero comparison between two values to determine if they are equivalent.

// console.log('console log isArguments' , _.isArguments({name:'nilesh'}));
// Checks if value is likely an arguments object.

// console.log('console log toArray' ,  _.toArray('123456'));
// Converts value to an array.

// console.log('console log lt', _.lt(6,4));
// Checks if value is less than other.