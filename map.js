const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map);

// Error
// const map2 = new Map([1, 2]);
// console.log(map2);
// Map 생성자 함수는 이터러블을 인수로 전달받아 Map 객체를 생성한다. ??

const map3 = new Map([[1, 2]]);
console.log(map3);

const map1 = new Map([['key1', 'value1'], ['key1', 'value2']]);
console.log(map1);

const map4 = new Map();
map4.set('key1', 'value1');
console.log(map4);
const {size} = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(size);

const keyMap = new Map();
const lee = {name: 'Lee'};
const kim = {name: 'Kim'};
keyMap.set(lee, 'developer').set(kim, 'designer');
console.log(keyMap);

console.log(keyMap.delete(kim));
console.log(keyMap);

// ??
// console.log(keyMap.has({name: 'Lee'}));
// {name: 'Lee'}는 객체라서 서로 같지 않다. 그럼 name: 'Lee'로 찾는 방법은?? 물론 name: 'Lee'를 미리 변수에 담고 찾으면 되지만 그렇게 말고
console.log(keyMap.has(lee));

console.log(keyMap.clear());
console.log(keyMap);

keyMap.set(0, 'Zero');
keyMap.set({num: 1}, 'one');
keyMap.forEach((value, key) => console.log(key, value));