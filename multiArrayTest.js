// 1.
let oneScore = [83, 90, 70, 87];
let twoScore = [87, 93, 62, 83];
let threeScore = [98, 90, 77, 97];

let scores = [oneScore, twoScore, threeScore];

scores.forEach(score => {
  let [A, B, C, D] = score;
  let sum = A + B + C + D;
  let average = sum / 4;
  console.log(sum, average);
})

// 2.
let mathScores = [90, 85, 70, 86, 97];
let sum = mathScores.reduce((acc, cur) => acc += cur);
console.log(`합계 : ${sum} 평균 : ${sum/mathScores.length}`)

// 3.
let tempNumbers = [7, -24, -8, 10, 17, -18];
console.log(tempNumbers.find(num => num < 0));

// 4.
let a = [12, 0, 2, 5, 4];
let b = [0, 2, 3, 12, 8];

// filter 메소드의 콜백 함수에서 return n을 사용하고 있다는 점입니다. filter 메소드는 콜백 함수에서 반환된 값이 true인 경우에만 배열의 해당 요소를 포함시킵니다. 숫자 0은 false로 간주되기 때문에 filter 메소드에서는 false로 처리됩니다. 따라서 0은 결과 배열에 포함되지 않습니다.

// let answer = a.filter(n => {
//   if(b.includes(n))
//     return n;
// })
// [12, 2];

let answer = a.filter(n => b.includes(n));
console.log(answer)

// 5.
let numbers2 = [1, 3, 5];
numbers2.forEach(n => console.log(n * 10));