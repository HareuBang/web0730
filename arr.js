// 문제 1.
// let numbers = [20, 37, - 21, 32, -2];
// document.write(numbers.filter(num => num > 30));

let num = [1, 2, 3];
let numB = num.join();
console.log(numB);

// 문제 2.
let scores = [67, 82, 97, 100, 92]
let answer = [];

for(let i=0; i<scores.length; i++){
  answer.push(scores[i]);
}
console.log(answer);

answer = [];
for(let score of scores) {
  answer.push(score);
}
console.log(answer);

// 3.
let tel = ["010", "1234", "5678"];
console.log(tel.join("-"));

// 4.
let colors = ["빨강", "노랑", "파랑", "주황"]
let color = colors.shift();
console.log(colors.join() + "/" + color);


// ?
let str = ["a", "abc", "acb"];
console.log(str.sort((a, b) => a - b));