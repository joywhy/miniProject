var x = 'g';

function foo() {
  console.log(x); //undefined
  var x = 10;
}
foo();
console.log(x); //g
