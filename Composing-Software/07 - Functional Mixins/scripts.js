const firstView = setJSONView('syntaxHighlight');
const debugView = setCodeView('debug');
const topWell = document.getElementById('top-well');

firstView({ manero: 'cara' });
topWell.innerHTML = 'Functional mixins are composable factory functions which connect together in a pipeline; each function adding some properties or behaviors like workers on an assembly line. Functional mixins don’t depend on or require a base factory or constructor: Simply pass any arbitrary object into a mixin, and an enhanced version of that object will be returned.';

const chocolate = {
  hasChocolate: () => true
};
const caramelSwirl = {
  hasCaramelSwirl: () => true
};
const pecans = {
  hasPecans: () => true
};
const iceCream = Object.assign({}, chocolate, caramelSwirl, pecans);
/*
// or, if your environment supports object spread...
const iceCream = {...chocolate, ...caramelSwirl, ...pecans}
*/
debugView(`  hasChocolate: ${ iceCream.hasChocolate() }
  hasCaramelSwirl: ${ iceCream.hasCaramelSwirl() }
  hasPecans: ${ iceCream.hasPecans() }
`);

// Base object factory
function base (spec) {
  var that = {}; // Create an empty object
  that.name = spec.name; // Add it a "name" property
  return that; // Return the object
}
// Construct a child object, inheriting from "base"
function child (spec) {
  // Create the object through the "base" constructor
  var that = base(spec);
  that.sayHello = function () { // Augment that object
    return "Hello, I'm " + that.name;
  };
  return that; // Return it
}
// Usage
var result = child({ name: 'a functional object' });
debugView(result.sayHello()); // "Hello, I'm a functional object"

const flying = o => {
  let isFlying = false;
  return Object.assign({}, o, {
    fly() {
      isFlying = true;
      return this;
    },
    isFlying: () => isFlying,
    land() {
      isFlying = false;
      return this;
    }
  });
};
const bird = flying({});
debugView(bird.isFlying()); // false
debugView(bird.fly().isFlying()); // true

const quacking = quack => o => Object.assign({}, o, {
  quack: () => quack
});
const quacker = quacking('Quack!')({});
debugView(quacker.quack()); // 'Quack!'

const createDuck = quack => quacking(quack)(flying({}));
const duck = createDuck('Quack!');
debugView(duck.fly().quack());

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
// OR...
// import pipe from `lodash/fp/flow`;
const createOtherDuck = quack => pipe(
  flying,
  quacking(quack)
)({});
const otherDuck = createOtherDuck('Quack!');
debugView(otherDuck.fly().quack());