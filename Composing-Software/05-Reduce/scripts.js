const firstView = setJSONView('syntaxHighlight');
const debugView = setCodeView('debug');
const topWell = document.getElementById('top-well');

firstView({ manero: 'cara' });
topWell.innerHTML = 'Reduce (aka: fold, accumulate) utility commonly used in functional programming that lets you iterate over a list, applying a function to an accumulated value and the next item in the list, until the iteration is complete and the accumulated value gets returned. Many useful things can be implemented with reduce. Frequently, it’s the most elegant way to do any non-trivial processing on a collection of items.';

const summingReducer = (acc, n) => acc + n;
debugView([2, 4, 6].reduce(summingReducer, 0)); // 12

const map = (fn, arr) => arr.reduce((acc, item, index, arr) => {
  return acc.concat(fn(item, index, arr));
}, []);

const filter = (fn, arr) => arr.reduce((newArr, item) => {
  return fn(item) ? newArr.concat([item]) : newArr;a
}, []);

const reduceCompose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
debugView(`reduceCompose = ${reduceCompose}`);

const add1 = n => n + 1;
const double = n => n * 2;
// const add1ThenDouble = reduceCompose(
//   double,
//   add1
// )
// add1ThenDouble(2) // 6
// // ((2 + 1 = 3) * 2 = 6)

const reducePipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
debugView(`reducePipe = ${reducePipe}`);

const add1ThenDouble = reducePipe(
  add1,
  double
);
add1ThenDouble(2); // 6
// ((2 + 1 = 3) * 2 = 6)

const doubleThenAdd1 = pipe(
  double,
  add1
);
doubleThenAdd1(2); // 5

const ADD_VALUE = 'ADD_VALUE';
const summingReducerReduxStyle = (state = 0, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_VALUE:
      return state + payload.value;
    default: return state;
  }
};

const actions = [
  { type: 'ADD_VALUE', payload: { value: 1 } },
  { type: 'ADD_VALUE', payload: { value: 1 } },
  { type: 'ADD_VALUE', payload: { value: 1 } },
];
actions.reduce(summingReducerReduxStyle, 0); // 3