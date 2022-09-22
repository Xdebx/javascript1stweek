//option1

// function greeting(name) {

//     names = name || "John";
//     console.log(name);
//     console.log("Hello " + names);
// }
// greeting(); //alerts "Hello John"

//option2

function greeting(name) {
    if(name === undefined) {
        name = 'John'
    }
    else 
        name = ''
    console.log(name);
    console.log("Hello " + name);
}
greeting(); //alerts "Hello John"