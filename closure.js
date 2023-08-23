//IIFE
(function() {
    console.log("Welcome to GFG!");
})();
//Closure
function x(){
    let a = 10
    y()
    function y(){
        console.log(`a=${a}`)
    }
}
x()
