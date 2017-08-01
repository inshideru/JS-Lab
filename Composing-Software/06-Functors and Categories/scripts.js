const firstView = setJSONView('syntaxHighlight');
const debugView = setCodeView('debug');
const topWell = document.getElementById('top-well');

firstView({ manero: 'cara' });
topWell.innerHTML = 'A functor data type is something you can map over. It’s a container which has an interface which can be used to apply a function to the values inside it. When you see a functor, you should think “mappable”. Functor types are typically represented as an object with a .map() method that maps from inputs to outputs while preserving structure. In practice, “preserving structure” means that the return value is also a functor data type.';

// Example of a Functor
const Identity = value => ({
  map: fn => Identity(fn(value)),
  valueOf: () => value,
  toString: () => `Identity(${value})`,
  [Symbol.iterator]: () => {
    let first = true;
    return ({
      next: () => {
        if (first) {
          first = false;
          return ({
            done: false,
          value});
        }
        return ({
          done: true
        });
      }
    });
  },
  constructor: Identity
});
Object.assign(Identity, {
  toString: () => 'Identity',
  is: x => typeof x.map === 'function'
});

// trace() is a utility to let you easily inspect
// the contents.
const trace = x => {
  console.log(x);
  return x;
};
const u = Identity(2);
// Identity law
u.map(trace); // 2
u.map(x => x).map(trace); // 2
const f = n => n + 1;
const g = n => n * 2;
// Composition law
const r1 = u.map(x => f(g(x)));
const r2 = u.map(g).map(f);
r1.map(trace); // 5
r2.map(trace); // 5

const ints = (Identity(2) + Identity(4));
trace(ints); // 6
const hi = (Identity('h') + Identity('i'));
trace(hi); // "hi"

console.log(u.toString());

// [Symbol.iterator] enables standard JS iterations:
const arr = [6, 7, ...Identity(8)];
trace(arr); // [6, 7, 8]

const fRange = (
  start,
  end
) => Array.from(
  { length: end - start + 1 },

  // change `Identity` to `start.constructor`
  (x, i) => start.constructor(i + start)
);
const range = fRange(Identity(2), 4);
range.map(x => x.map(trace)); // 2, 3, 4

// Create the predicate
const exists = x => (x.valueOf() !== undefined && x.valueOf() !== null);
const ifExists = x => ({
  map: fn => exists(x) ? x.map(fn) : x
});
const add1 = n => n + 1;
const double = n => n * 2;
// Nothing happens...
ifExists(Identity(undefined)).map(trace);
// Still nothing...
ifExists(Identity(null)).map(trace);
// 42
ifExists(Identity(20))
  .map(add1)
  .map(double)
  .map(trace);

const curry = (
  f, arr = []
) => (...args) => (
  a => a.length === f.length ?
  f(...a) :
  curry(f, a)
)([...arr, ...args]);

const map = curry((fn, F) => F.map(fn));
const Double = n => n * 2;
const mdouble = map(Double);
mdouble(Identity(4)).map(trace); // 8
