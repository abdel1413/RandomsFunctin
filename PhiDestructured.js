//we can used destructure for our past phi function
// where the bidings are point to array itself. But with
//destracture  way, the bidings are pointing to elements
//of the array
//INSTEAD OF PASSIN TABLE AS PARAM, WE CAN DESTRUCTURE
//IT BY PASSING AN ARRAY CONTAINING ELEMENTS
// n00  means table[0]

function phi([n00, n01, n10, n11]) {
  return (
    n00 * n11 -
    (n01 * n10) /
      Math.sqrt((n00 + n01) * (n00 + n11) * (n10 + n11) * (n01 + n11))
  );
}

//we can also destructure an object using curly braces
//NOTE WE DON'T NEED TO ACCESS PROPERTIES USING
//DOT NOTATION.  CORRESPONDING PROPERTIES ARE PASSED AS BIDINGS
let { name, age } = { name: "boy", age: 25 };
console.log(name);
console.log(age);

//regula object
//TO access property, we use dot notation (nameOfbiding.key)
let object = { name: "boy", age: 25 };

console.log(object.name);
console.log(object.age);
