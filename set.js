const set = new Set([1, 2, 3, 3]);
console.log(set);

// 1.
let uniq = array => new Set(array);
console.log(uniq([2, 1, 2, 3, 4, 3, 4]));
// 2.
uniq = array => [new Set(array)];
console.log(uniq([2, 1, 2, 3, 4, 3, 4]));
// 3.
uniq = array => [...new Set(array)];
console.log(uniq([2, 1, 2, 3, 4, 3, 4]));

// 함수 호출 시 인수를 전달할 때 사용.

// {size} 와 size 의 차이.
const {size} = new Set([1, 2, 3, 3]);
console.log(size);

set.add(4).add(5);
console.log(set);

console.log(set.has(2));
// Error 메소드 체이닝 X
// console.log(set.has(3).has(4));

set.delete(2);
console.log(set);
// set.delete(3).delete(4);
console.log(set);

set.clear();
console.log(set);

let odds = new Set([1, 3, 5, 7, 9]);
let sum = 0;
for(let o of odds)
  sum += o;
console.log(sum);

let product = 1;
odds.forEach(o => product *= o);
console.log(product);

const userIDs = [101, 102, 101, 103, 102];
const uniqueUserIDs = new Set(userIDs);
uniqueUserIDs.forEach(userID => {
  console.log(`Id : ${userID}`);
})

// ? Set {} 를 사용하면 안되는 이유는?
const setA = new Set([1, 2, 3]);
console.log([...setA]);
console.log({...setA});

const [a, ...rest] = setA;
// const {a, ...rest} = setA;
console.log(a, rest);

let set1 = new Set([1, 2, 3]);
let set2 = new Set([4, 3, 2]);
// 합집합
let union = new Set([...set1, ...set2]);
// 교집합
let intersection = new Set([...set1].filter(x => set2.has(x)));
// 차집합
let difference = new Set([...set1].filter(x => !set2.has(x)));
console.log(union);
console.log(intersection);
console.log(difference);