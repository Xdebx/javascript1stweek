/*
    Block scope
    Function scope
    Global scope
*/

/*
    LET keyword allows you to declare variables that are limited to the scope of a block statement, 
    or expression on which it is used, unlike 
    VAR keyword, 
    which declares a variable globally, or locally to an entire function regardless of block scope.
*/

/*
    - Variables declared with the var keyword can NOT have block scope.
      Variables declared inside a { } block can be accessed from outside the block.

    - Variables declared Globally (outside any function) have Global Scope.
      Global variables can be accessed from anywhere in a JavaScript program.
      Variables declared with var, let and const are quite similar when declared outside a block.
      They all have Global Scope:

    
*/
// var keyword

var foo = 'bar'
if (foo) {
    var bar = 42
    console.log(bar)
}
console.log(bar) // bar CAN be used here

//==================================

/* 
    - Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
      ES6 introduced two important new JavaScript keywords: let and const.
      These two keywords provide Block Scope in JavaScript.
      Variables declared inside a { } block cannot be accessed from outside the block:

    - variables declared within a JavaScript function, become LOCAL to the function.

*/
// let keyword

var foo = 'bar'
if (foo) {
    let bar = 42 
    console.log(bar)
}
// bar CANNOT be used here
