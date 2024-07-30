let arr = [1, 2, 3, 4, 5];
let iterator = arr[Symbol.iterator]();

console.log(iterator);
let result = iterator.next();
console.log(result);

while(!result.done) {
  console.log(result.value);
  result = iterator.next();
}

let copy = [...iterator];
console.log(copy);