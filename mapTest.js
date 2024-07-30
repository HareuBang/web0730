// 1.
const scores = new Map([["국어", 85], ["영어", 90], ["수학", 95]]);
// let scores = new Map();
// scores.set("국어", 85).set("영어", 90).set("수학", 95);
let sum = 0;
scores.forEach(value => sum += value);
console.log(sum + " , " + sum/scores.size);

// 2.
const book = new Map();

//문자열이 아닌 변수로 간주되어서.
// book.set(title, "유럽 책방 문화 탐구").set(author, "한미화").set(price, "23000"); 

book.set("title", "유럽 책방 문화 탐구").set("author", "한미화").set("price", "23000");
book.forEach((val, key) => console.log(key + ": " + val));

// 3.
const numbers = [3, 7, 12, 3, 12, 3];
console.log(...new Set(numbers));