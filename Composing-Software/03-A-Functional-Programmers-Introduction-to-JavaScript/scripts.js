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

const createUser = ({
  name = 'Anonymous',
  avatarThumbnail = '/avatars/anonymous.png'
}) => ({
  name,
  avatarThumbnail
});
const george = createUser({
  name: 'George',
  avatarThumbnail: 'avatars/shades-emoji.png'
});
firstView(george);

const shiftToLast = (head, ...tail) => [...tail, head];

const highpass = cutoff => n => n >= cutoff;

const gt4 = highpass(4);
gt4(6); // true
gt4(3); // false

debugView([2, 4, 6].filter(gt4).map(double));