console.log("Starting App");

setTimeout(() => {
    console.log("Inside of Callback");
},2000);

setTimeout(() => {
    console.log("Inside of Another Callback");
},0)

console.log("End of Program");
