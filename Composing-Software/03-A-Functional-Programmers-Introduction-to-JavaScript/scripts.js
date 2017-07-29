const firstView = setJSONView('syntaxHighlight');
const debugView = setCodeView('debug');
const topWell = document.getElementById('top-well');

firstView({ manero: 'cara' });
topWell.innerHTML = moment().format('LLLL');

const a = 'a';
const oldA = { a: a }; // long, redundant way
const oA = { a}; // short an sweet!

const b = 'b';
const oB = { b};

const c = {...oA, ...oB}; // { a: 'a', b: 'b' }
firstView(c)

const d = Object.assign({}, oA, oB); // { a: 'a', b: 'b' }

const [t, u] = ['a', 'b'];
t; // 'a'
u; // 'b'
const blep = {
  blop: 'blop'
};

// The following is equivalent to:
// const blop = blep.blop
const { blop } = blep;
debugView(blop); // 'blop'

const myReducer = (state = {}, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'FOO': return Object.assign({}, state, payload);
    default: return state;
  }
};

debugView(`myReducer = ${myReducer}`);

const { blop: bloop } = blep;
debugView(bloop); // 'blop'

debugView(14 - 7 === 7 ? 'Yep!' : 'Nope.'); // Yep!

const double = x => x * 2;
debugView(double);

const orZero = (n = 0) => n;
