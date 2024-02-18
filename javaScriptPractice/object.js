// const obj = {
//   a: 'Dip2K',
// };
// console.log(Object.values(obj));

function Circle1(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}
const circle3 = new Circle1(1);
const circle4 = new Circle1(2);

console.log(circle3.getArea === circle4.getArea); //false

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); //true
