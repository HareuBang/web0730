// let arr = new Array(2);
// for(let i=0; i<arr.length; i++) {
//   arr[i] = new Array(3);
// }
// console.log(arr);

let arr = Array.from(new Array(2), () => new Array(3));
console.log(arr);

arr[0][0] = 1;
arr[0][1] = 2;
arr[0][2] = 3;
arr[1][0] = 4;
arr[1][1] = 5;
arr[1][2] = 6;
console.table(arr);

for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++){
    console.log(arr[i][j]);
  }
}

const str = [1, 2, 3, 4, 5];
console.table(str);