//Option1

// function changeCase(val) {
//     return val.toUpperCase();
// }
// function demofunc(a, passfunction) {
//     console.log(passfunction(a));
// }
// demofunc("smallcase", changeCase);

//Option2
//fat arrow

const changeCase = val => val.toUpperCase();

function demofunc(a, passfunction) {
    console.log(passfunction(a));
}
 
demofunc("smallcase", changeCase);