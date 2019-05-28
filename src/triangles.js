export function triangle(side1, side2, side3) {
  var equilateral = "This is an equilateral triangle";
  var isosceles = "This is an isosceles triangle";
  var scalene = "This is a scalene triangle";
  var noTriangle = "This is not a triangle";
  if (side1 + side2 >= side3 && side1 + side3 >= side2 && side2 + side3 >= side1 && side1 !== 0 && side2 !== 0 && side3 !== 0) {
    if (side1 === side2 && side1 === side3 && side2 === side3) {
      return equilateral;
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return isosceles;
    } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
      return scalene;
    }
  } else return noTriangle;
}
