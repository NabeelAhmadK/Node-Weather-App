var asyncAdd = (a, b) => {

    return new Promise((resolve, reject) => {

        setTimeout(()=>{

            typeof a === 'number' && typeof b === 'number' ? resolve(a + b) : reject('Arg must be number');

        },1500)
        
    })
}

asyncAdd('2', 1).then((res) => {
    console.log(res);
    return asyncAdd(res, 23);
}).then((res) => {
    console.log("Result : ", res);
}).catch(()=>{
    console.log("Arg must be numbers");
});


// var promise = new Promise((resolve, reject)=>{
//     //resolve('Hey, Its worked');
//     reject('Unable to get data');
// });

// promise.then((message) =>{
//     console.log(message);
// },(errorMessage)=>{
//     console.log(errorMessage);
// });