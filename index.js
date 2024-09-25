
function receivesAFunction(callback) {
    callback();  // Calls the callback function passed as an argument
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function!");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function!");
    };
  }
