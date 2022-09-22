var shape;
var shape_name = "SQUARE";
if (shape_name === "SQUARE") {
  shape = function () {
    return "drawing square";
  };
} else {
  shape = function () {
    return "drawing not a square";
  };
}
console.log(shape); 
console.log(shape()); 