const _ = require('lodash');

let getKey = _.once( () =>{
    console.log('console function called');
    return "smdncksjbdkjs";
})

// console.log('console log getKey 8', getKey());
// console.log('console log getKey 9', getKey());
// console.log('console log getKey 10', getKey());

let welcomeMsg = _.spread((name, designation)=> {
    return 'Welcome '+name+' to organization as an '+designation;
})

// console.log('console log spread' , welcomeMsg(['nilesh','software engineer']));
// Creates a function that invokes func with the this binding of the create function and an array of arguments much like Function#apply.

// _.delay( (name)=>{
//     console.log(name);
// },1000,'nilesh');
// Invokes func after wait milliseconds. Any additional arguments are provided to func when it's invoked.

let flip = _.flip( (num1 ,num2, num3, num4 , num5 , num6)=>{
    console.log(num1 ,num2, num3, num4 , num5 , num6)
} )

// flip(1,2,3,4,5,6);
// Creates a function that invokes func with arguments reversed.

function callMe(){
    console.log('Called Me');
}
let debpunce = _.debounce( callMe , 2500 , {'maxWait': 1000,'leading':false,'trailing':true})
// console.log('This console if to wait for response this will be undefined' , debpunce());
// Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked. The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the debounced function. Subsequent calls to the debounced function return the result of the last func invocation.

// _.defer( (text)=>{ console.log('check defer' , text) }, 'deferred' );
// Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to func when it's invoked.



