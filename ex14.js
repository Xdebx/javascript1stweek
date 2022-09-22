var a = 1;
function scopeTest() {
  let a = 2; //Overwrites global variable 2, you omit 'var'
    //console.log(a); //output 121
}
console.log(a); //prints 1
// scopeTest(); //prints 2
// console.log(a);