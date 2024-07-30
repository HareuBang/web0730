function* generate() {
  console.log("제너레이터 실행");
  console.log('1생성');
  yield 1;
  console.log('2생성');
  yield 2;
  console.log('3생성');
  yield 3;
}

let gen = generate();
let result = gen.next();
result = gen.next();
result = gen.next();
console.log(gen);
console.log(result);

while(!result.done) {
    console.log(result.done) 
    console.log(result.value);
    result= gen.next();
}

gen = generate();
for(let ge of gen)
  console.log(gen);

let iterator = gen[Symbol.iterator]();
console.log(iterator);

function* sequence(from = 0,to= Infinity, interval = 1){
  let next = from;
  while(next <= 0){
    yield next;
    next += interval;
  }
}

let evenSequ = sequence(2, 10, 2);
for(let seq of evenSequ)
  console.log(seq);