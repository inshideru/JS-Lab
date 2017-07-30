const firstView = setJSONView('syntaxHighlight');
const debugView = setCodeView('debug');
const topWell = document.getElementById('top-well');

firstView({ manero: 'cara' });
topWell.innerHTML = 'A higher order function is a function that takes a function as an argument, or returns a function.Higher order function is in contrast to first order functions, which don’t take a function as an argument or return a function as output.';

const censor = words => {
  const filtered = [];
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    if (word.length !== 4) filtered.push(word);
  }
  return filtered;
};
censor(['oops', 'gasp', 'shout', 'sun']);
// [ 'shout', 'sun' ]

const startsWithS = words => {
  const filtered = [];
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    if (word.startsWith('s')) filtered.push(word);
  }
  return filtered;
};
startsWithS(['oops', 'gasp', 'shout', 'sun']);
// [ 'shout', 'sun' ]

const reduce = (reducer, initial, arr) => {
  // shared stuff
  let acc = initial;
  for (let i = 0, length = arr.length; i < length; i++) {
    // unique stuff in reducer() call
    acc = reducer(acc, arr[i]);
  // more shared stuff
  }
  return acc;
};
reduce((acc, curr) => acc + curr, 0, [1,2,3]); // 6

const filter = (
  fn, arr
) => reduce((acc, curr) => fn(curr) ?
  acc.concat([curr]) :
  acc, [], arr
);

const newStartsWithS = words => filter(
  word => word.startsWith('s'),
  words
);

debugView(newStartsWithS(['oops', 'gasp', 'shout', 'sun']));
