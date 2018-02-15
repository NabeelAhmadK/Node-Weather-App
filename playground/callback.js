// var x = () => {
//     console.log("In x function");
// }

// var y = (callback) => {
//     console.log("In y Function");
//    // callback();
// }

// y(x);

// var getUser = (id, callback) => {
//     var user = {
//         id: id,
//         name: 'nabeel'
//     }

//     callback(user);


// }

// getUser(31, (userObject)=>{
//     console.log(userObject);
// })


var calc = (num1, num2, callback) => {
    return callback(num1, num2);
}

calc(23, 12, (num1, num2) => {
    console.log(num1 + num2);
});


calc(23, 12, (num1, num2) => {
    console.log(num1 * num2);
});