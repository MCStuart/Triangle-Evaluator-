import { triangle } from './../src/triangles';

describe('triangles', function() {

  it('should test if all sides combined do not make a triangle', function() {
    expect(triangle(1, 1, 10)).toEqual("This is not a triangle");

  });

  it('should test if all sides combined make a triangle', function() {
    expect(triangle(1, 2, 3)).toEqual("This is a scalene triangle");
  });

  it('should test if all sides combined makes an isosceles triangle', function() {
    expect(triangle(1, 1, 2)).toEqual("This is an isosceles triangle");
  });

  it('should test if all sides combined makes an equilateral triangle', function() {
    expect(triangle(1, 1, 1)).toEqual("This is an equilateral triangle");
  });

});
