//Function declaration

//Pag var naman gamit dapat mas mauuna yung var function bago tawagin yung functionOne
var functionOne = function () {
    console.log("functionOne");
  };
  functionOne();  //Output functionOne
  

  functionTwo();  //Output functionTwo
  //No error kahit mauna yung pag tawag mo sa functionTwo kung function gamit mo
  function functionTwo() {
    console.log("functionTwo");
  }
  
  //Add all
  var sum = function () {
    var i,
      total = 0;
    for (i = 0; i < arguments.length; i += 1) {
      total += arguments[i];
    }
    return total;
  };
  
  console.log(sum(1, 2, 3, 4, 5));
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
  
  function eventHandler(event) {
    event();
  }
  eventHandler(function () {
    console.log("Event fired");
  });