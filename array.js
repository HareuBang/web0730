// let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 500, 450];
// console.log(carSales);

// let carSales2 = new Array(300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 500, 450);
// console.log(carSales2);

// let copy = Array.from(carSales);
// console.log(copy);

// let concat = [0, ...carSales, 900, 700];
// console.log(concat);

let numbers = [..."0123456789"];
console.log(numbers);

let may = numbers[4];
console.log(may);

let june = numbers["5"];
console.log(june);

numbers[10] = -50;
console.log(numbers);

let len = numbers.length;
console.log(len);

numbers.length = 0;
console.log(numbers);

numbers = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

let [A, B, C, ...rest] = numbers;
console.log(A, B, C);
console.log(rest);

let sum = 0;
for(let [idx, score] of numbers.entries()) {
  if(idx % 2 === 0)
    sum += score;
}
let average = sum / (numbers.length / 2);
console.log(average);

const car = {
  maker: 'BMW',
  color: 'red',
  year: '2012',
};
for(let key in car) {
  console.log(key);
  console.log(car[key]);
}
// Error
// for(let value of car){
//   console.log(value);
// }

sum = 0;
numbers.forEach(num => sum+=num);
console.log(sum);

numbers.forEach((num, idx, array) => {
  array[idx] = num + 50
});
console.log(numbers);

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newNumbers = numbers.map(num => num + 30);
console.log(newNumbers);

let highNumbers = numbers.filter(num => num > 5);
console.log(highNumbers);

let firstNumber = numbers.find(sale => sale > 5);
console.log(firstNumber);

let firstNumberFiveIdx = numbers.findIndex(sale => sale > 5);
console.log(firstNumberFiveIdx);

let allNumberFive = numbers.every(num => num > 5);
console.log(allNumberFive);

let anyNumberFive = numbers.some(num => num > 5);
console.log(anyNumberFive);

let sum2 = numbers.reduce((n1, n2) => n1 + n2, 0)
console.log(sum2);

let maxNum = numbers.reduce((t1, t2) => t1 > t2 ? t1 : t2);
console.log(maxNum);

let flat = [1, [2, 3]].flat();
console.log(flat);

let message = ["오늘은", "비가 옵니다."];
let words = message.flatMap(msg => msg.split(''));
console.log(words);

let original = [1, 2, 3];
let newArray;
newArray = original.concat([6, 7], [8, 9])
console.log(newArray)

let stack = [];
stack.push(1);
stack.push(2, 3);
stack.pop();
console.log(stack);

stack.length = 0;
stack.unshift(1);
stack.unshift(2, 3);
console.log(stack);
stack.shift();
console.log(stack);

let a = [1, 2, 3, 4, 5];

let b = a.slice(1, -1);
console.log(b);
console.log(a)

let splice = a.splice(0, 2);
console.log(splice);
console.log(a);

let splice2 = a.splice(0, 2, 10, 20);
console.log(splice2);
console.log(a);

let c = new Array(5);
c.fill(0);
c.fill(1, 1);
c.fill(2, 2, -1);
console.log(c);

console.log(c.indexOf(2));
console.log(c.lastIndexOf(2));

console.log(c.includes(0));
console.log(c.includes(NaN));

let str = ["a", "abc", "acb"];
console.log(str.sort((a, b) => a - b));

let num = [1, 2, 3];
let numB = num.join();
console.log(numB);
let numC = num.join('');
console.log(numC) 